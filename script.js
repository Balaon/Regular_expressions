let pwdElem = document.getElementById('pwd');
let emailElem = document.getElementById('email');

pwdElem.addEventListener('input', () => {
    let pattern = /^[a-zа-яё_0-9-]{8,12}$/i
    let value = pwdElem.value;
    let isValid = pattern.test(value);
    if (isValid) {
        pwdElem.style.border = '2px solid green';
    } else {
        pwdElem.style.border = '2px solid red';
    }

});
emailElem.addEventListener('input', () => {
    let pattern = /^\w{2,12}@\w{2,5}\.\w{2,5}$/i //(ru|com)
    let value = emailElem.value;
    let isValid = pattern.test(value);
    if (isValid) {
        emailElem.style.border = '2px solid green';
    } else {
        emailElem.style.border = '2px solid red';
    }

});

let values = {
    name: "Juri",
    lastname: "Balaev",
    age: 23
}

let inputElem = document.querySelector('#text')
let outputElem = document.querySelector('.output')

inputElem.addEventListener('input', () => {
    let value = inputElem.value;
    let pattern = /\{\{\s*\w+\s*\}\}/g;
    outputElem.innerText = value.replace(pattern, findValue);
})

function findValue(value) {
    let pattern = /\w+/;
    let key = value.match(pattern)[0];
    console.log(key);
    return values[key] || '';
}

(function() {
    let inputElem = document.querySelector('#search input')
    let textElem = document.querySelector('#search p')
    let formElem = document.querySelector('#search form')
    let caseElem = document.querySelector('#search #case');


    formElem.addEventListener('submit', function(event) {
        event.preventDefault();
        let searchValue = inputElem.value;

        let pattern;
        if (caseElem.checked) {
            pattern = new RegExp(screen(searchValue), 'g');

        } else {

            pattern = new RegExp(screen(searchValue), 'gi');
        }
        if (searchValue === '') {
            textElem.innerText = textElem.innerText;
            return;
        }
        let text = textElem.innerText;
        let result = text.replace(pattern, mark);
        textElem.innerHTML = result;
    })

    function mark(l) {

        return `<span class='result'>${l}</span>`;
    }

    function screen(str) {
        return str.split('')
            .map(elem => /[а-яё]|\W /.test(elem) ? elem : '\\' + elem)
            .join('');
    }

})()

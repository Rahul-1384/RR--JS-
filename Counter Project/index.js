let value = document.querySelector('.count');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');

function minus(){
    value.textContent = value.textContent-1;
}

function plus(){
    value.textContent = value.textContent+1;
}

button1.addEventListener('click', minus);
button2.addEventListener('click', plus);
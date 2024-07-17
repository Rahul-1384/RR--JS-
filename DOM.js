let x=document.getElementById('heading');
x.innerHTML='Hello RR';

let a=document.getElementsByClassName('paragraph');
a.innerHTML='Hello';

let b=document.getElementsByTagName('p');
b.innerHTML='RR';

document.querySelector('header').innerHTML="hii";
document.querySelector('.paragraph').innerHTML="hiiiiiiiii";


// if we want to add or create an element in the document then,
let content=document.querySelector('.para');
let newPara=document.createElement('h1');           //created element
content.appendChild(newPara);                       //appended element
document.querySelector('.para');


// how to write some text inside the created element
let para = document.querySelector('.para');
let myPara = document.createElement('p');
myPara.textContent="I am RR";
para.appendChild(myPara);


// // how to add the element at any position
let head = document.querySelector('.head');
let newHead = document.createElement('p');
newHead.textContent = "I am adjusted text";
head.insertAdjacentElement('beforeBegin',newHead);
head.insertAdjacentElement('afterBegin',newHead);
head.insertAdjacentElement('beforeEnd',newHead);
head.insertAdjacentElement('afterEnd',newHead);

// CSS properties
let cont = document.querySelector('.styling');
// 1)
cont.style.color = 'yellow';

// 2)
cont.style.cssText = 'color:green; background-color:red';

// 3) we can also add id or class from this method.
cont.setAttribute('style','color:blue');

// we don't use className instead of this we can use classList.
// because className is string type and classList is object type.
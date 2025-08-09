var a = document.getElementById("para")
var a = document.getElementsByClassName("heading")
var a = document.getElementsByTagName("h1")
var a = document.querySelector(".heading")
var a = document.querySelectorAll(".heading")
console.log(a)
const change = document.querySelector("#change")

console.log(change.innerText = "Rahul Rajput")

// Creating & Adding element
const content = document.querySelector("#content")
let newPara = document.createElement("p")
newPara.textContent = "Hello I am newly added para at end always"
content.appendChild(newPara)

// Adding at your choice place
let newPara1 = document.createElement('p')
newPara1.textContent = "I am before begin new para"
content.insertAdjacentElement('afterbegin', newPara1)

// Removing
// newPara.parentElement.remove(newPara)


// Styling
newPara.style.color = "red"
newPara.style.cssText = ("color:yellow; background-color: red")
newPara.setAttribute("id", "Rahul")
newPara.classList.add("rahul")
console.log(newPara.className)



const parent = document.querySelector("#parent")
const child = document.querySelector("#child")

// Bubbling phase event
parent.addEventListener('click', () => {
    console.log("Parent Event");
});

child.addEventListener('click', (e) => {
    console.log("Child Event");
    e.stopImmediatePropagation()
    e.stopPropagation();
});
child.addEventListener('click', (e) => {
    console.log("Child Event another listener");
});

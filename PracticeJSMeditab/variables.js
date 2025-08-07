// var a = 10;
// var a = 20;
// let b = 10;
// const c = 10;

// function fun(){
//     let b = 5;
//     console.log(a);
//     console.log(b);
// }
// fun();

// let x = null;
// console.log(typeof x)


let a = {name: "Rahul", age: 20, sex: "Male", a:{name:"manish", age: 21, sex: "Male"}};
console.log(a)

let arr = [1,2,3,4,5,"fds"];
console.log(arr[6] = "fjklsdjf")


// Dynamic nature of Objects
let person = {
    name: "Rahul",
    age: 20,
    sex: "Male",
}
console.log(person)
person.color = "white"
console.log(person)
delete person.color
console.log(person)

// Object Cloning
// 1) Iteration Or For_in loop
let person1 = {
    name: "Rahul",
    age: 20,
    sex: "Male",
}
let src = {value:1}
let clone1 = {}
for(let key in person1){
    clone1[key] = person1[key]
}
console.log("Iteration Cloning",clone1)

// 2) Assign
let clone2 = Object.assign({}, person1, src)
console.log("Assign",clone2)

// 3) Spread
let clone3 = {...person1, ...src}
console.log("Spread", clone3)


// Template Literals
let firstName = "Rahul";
console.log(`My name is ${firstName}`)

// Date and Time
let date = new Date()
let date2 = new Date(2004, 5, 20, 7)
console.log(date2);

// Hoisting: moving decalaration on the top of the file before execting it
// 1) Varable hoisting
// var
console.log("This is hoisting",hoist1);  // undefined
var hoist1 = 10;

// let & const
// console.log(hoist2);    // typeerror: not initialized
// let hoist2 = 10;

// console.log(hoist3);    // typeerror: not initialized
// const hoist3 = 10;

// 2) Function hoisting
// function declaration
greet1();   // Hello (whole function is hoisted)

function greet1(){
    console.log("Hello");
}

// function assignment
// sayHii();   // Typeerror (only variable sayHii is hoisted not whole function)

// const sayHii = function(){
//     console.log("hello");
// }

// reducing array
let arrReduce = [1,2,3,4];
let sum = arrReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum)
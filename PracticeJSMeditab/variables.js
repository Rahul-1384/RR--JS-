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
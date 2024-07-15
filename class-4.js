// function myFun(){
//     console.log("RR");
// }

// for(let i=0;i<10;i++){
//     myFun();
// }


// arguments

// function myFun(a,b){
//     let total=0;
//     for(let value of arguments){
//         total=total+value;
//     }
//     return total;
// }
// let a=myFun(1,2,3,4,5);
// console.log(a);

// rest operator
// it must be last formal parameter
// function myfun(a, ...args){
//     console.log(args);
// }
// myfun(1,2,3,4,5);



// getters and setters

let person={
    fname:'Rahul',
    lname:'Rajput',

    get fullname(){
        return `${person.fname} ${person.lname}`;
    },
    set fullname(value){
        let parts=value.split(' ');
        this.fname=parts[0];
        this.lname=parts[1];
    }
}
person.fullname='Rahul'
console.log(person.fullname);
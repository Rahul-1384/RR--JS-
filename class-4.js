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
// try and catch block

let person={
    fname:'Rahul',
    lname:'Rajput',

    get fullname(){
        return `${person.fname} ${person.lname}`;
    },
    set fullname(value){
        if(typeof value !== String){
            throw new Error("Please Set a String to set a value");
        }
        let parts=value.split(' ');
        this.fname=parts[0];
        this.lname=parts[1];
    }
}
try{
    person.fullname='RAHUL R';
}
catch(e){
    alert(e);
}
console.log(person.fullname);


// // reducing array
// let arr=[1,2,3,4,5];
// let total=0;
// // for(let value of arr){
// //     total=total+value;
// // }
// // console.log(total);

// // accumulator == total
// // currentvalue == value
// // 0 == total=0
// // if we will not add 0 to reduce function then it will take the first value of array
// let totalSum = arr.reduce((accumulator,currentvalue) => accumulator+currentvalue,0);
// console.log(totalSum);
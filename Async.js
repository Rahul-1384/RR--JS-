// Async function is used when we use so many then().
// async function abcd(){
//     return 7;
// }
// console.log(abcd());

async function utility(){
    let promise1 = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Delhi is hotter');
        },8000);
    });

    let promise2 = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Hyderabad is colder');
        },8000);
    });

    let p1 = await promise1;
    let p2 = await promise2;
    return [p1, p2];
}
console.log(utility());
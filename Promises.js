// let myPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Hii');
//     },5000);
//     // resolve(2004);      // fulfilled
//     reject(new Error('Hello error is there'));
// })
// console.log('First');


// let myPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Hii');
//     },5000);
//     // resolve(2004);      // fulfilled
//     reject(new Error('Hello error is there'));
// })
// myPromise.then((value) => {console.log(value)});
// myPromise.catch((error) => {console.log('received an error')});

let myPromise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('I am 1st Promise');
    },2000);
    resolve(2004);
})
let result  = myPromise1.then((value) => {
    let myPromise2 = new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('I am 2nd promise');
        },300);
        // resolve("Promise2");
        reject(new Error('I am error'));
    });
    return myPromise2;
})
result.then((value) => console.log(value));
// Callback funtions are those functions that are passed as an argument to the other functions

function myFun(){
    console.log("hello");
}
setTimeout(myFun,3000);

// myFun is callback by setTimeout funciton
// Note that when a callback funtion is used as an argument then parenthesis is not allowed in this funciton


// But when to use callback funtions
// with asynchrounous functions we can use the callback funtions
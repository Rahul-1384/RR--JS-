// let year=2004;
// if(true){
//     year=2005;
//     console.log(year);  // output---->2005
// }
// console.log(year);      //output--->2005


// let year=2004;
// if(true){
//     let year=2005;
//     let month=7;
//     console.log(year);  //output--->2005

// }
// console.log(year,month);      //output--->2004

// let year=2004;
// if(true){
//     let year=2005;
//     let month=7;    //it'll not get accessed from outside the block.
//     var month=7;    // it'll get accessed from outside the block
//     console.log(year);
// }
// console.log(year,month);


var x=100;
{
    var x=10;
}
console.log(x)
// // performance.now()
// let t1 = performance.now();
// for(let i=0;i<=100;i++){
//     let paras = document.createElement('p');
//     paras.textContent = 'This is para ' + i;

//     document.body.appendChild(paras);
// }   
// let t2 = performance.now();
// console.log("Performance time is "+ (t2-t1) +"ms");
// // In the above case it will take more time to execute because of two terminologies i.e,
// // Reflow and Repaint
// // Reflow---> when an element is added to an html page the dimensions,length, height etc is measured.
// // Repaint---> it shows the elements in the pixel on display.
// // So, to get convinient performance to execute/load the page we use document fragmentation method
// // In document fragmentation there is no Reflow and Repaint but when we add that document fragment to the 
// // document body it there will be 1 Reflow and 1 Repaint for adding one document fragment.

// // document.createDocumnetFragment()
// let t3 = performance.now();
// let fragment = document.createDocumentFragment();
// for(let i=1;i<=100;i++){
//     let paras = document.createElement('p');
//     paras.textContent = 'This is para ' + i;

//     fragment.appendChild(paras);
// }   
// document.body.appendChild(fragment);        // 1 Reflow & 1 Repaint
// let t4 = performance.now();
// console.log("Performance time is "+ (t4-t3) +"ms");

function myFun(){
    console.log("hello RR");
}
setTimeout(myFun,4000);
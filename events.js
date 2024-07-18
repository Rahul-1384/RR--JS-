// it is used to show all the events occuring on the html page
monitorEvents(document);
unmonitorEvents(document);


// EventTarget
// it is a top level entity
// it has 3 methods
// addEventListener()
// removeEventListener()
// dispatchEvent()


// // addEventListener
// function print(){
//     console.log("I have clicked on the document page");
// }

// document.addEventListener('click', print);
// document.removeEventListener('click', print);

function myfun(){
    console.log("Hello RR");
}
document.addEventListener('click', myfun);
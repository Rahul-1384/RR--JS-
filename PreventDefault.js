let links = document.querySelectorAll('a');
let firstLink = links[0];

firstLink.addEventListener('click', function(event){
    event.preventDefault();
    console.log("Hello RR");
});

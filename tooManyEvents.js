let myDiv = document.createElement('div');
function paraStatus(event){
    console.log(event.target.textContent);      // Individuality attained
}
myDiv.addEventListener('click', paraStatus);
for(let i=1;i<=100;i++){
    let myPara = document.createElement('p');
    myPara.textContent = 'This is para ' + i;

    myDiv.appendChild(myPara);
}
document.body.appendChild(myDiv);

document.addEventListener('DOMContentLoaded', function(event){
    console.log('successfully loaded');
})
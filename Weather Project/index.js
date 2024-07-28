let grant = document.querySelector('.grant-location-section');
let button = document.querySelector('[grant-button]');

const API_key = 'eee37ce1dcfcaac90103d48e243a9e44';
function getGeoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showUserPosition);
    }else{
        console.log('Browser does not support Geolocation');
    }
}

let newPara = document.createElement('p');
grant.appendChild(newPara);

function showUserPosition(position){
    newPara.textContent = "";
    newPara.textContent = position.coords.latitude + " " + position.coords.longitude;
}
button.addEventListener('click', getGeoLocation);


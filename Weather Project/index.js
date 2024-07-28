const grant = document.querySelector('.grant-location-section');
const input = document.querySelector('.input-section');
const yourCity = document.querySelector('.your-city-card');
const search = document.querySelector('[search]');
const yourWeather = document.querySelector('[your-weather]');
const searchInput = document.querySelector('[input-search]');
const searchImage = document.querySelector('[input-image]');
const loader = document.querySelector('[loader]');


let button = document.querySelector('[grant-button]');


function switchToSearch(){
    grant.classList.add('grant-location-section-opacity');
    input.classList.remove('input-section-opacity');
    yourCity.classList.add('your-city-card-opacity');
    loader.classList.add('loader-opacity');
}
function switchToYourWeather(){
    grant.classList.add('grant-location-section-opacity');
    input.classList.add('input-section-opacity');
    loader.classList.add('loader-opacity');
    yourCity.classList.remove('your-city-card-opacity');
}
search.addEventListener('click', switchToSearch);
yourWeather.addEventListener('click', switchToYourWeather);



if(searchInput.value !== ""){
        
}else{
    searchInput.addEventListener('keypress', function(event){
        if(event.key === 'Enter' && searchInput.value !== ""){
            event.preventDefault();
            searchImage.click();
            // add the class to show loader

            getWeatherLocationByCityName();
        }
    })
}
function getWeatherLocationByCityName(){
    console.log(searchInput.value);
}








// Grant Access
const API_key = 'eee37ce1dcfcaac90103d48e243a9e44';
function getGeoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showUserPosition);
    }else{
        console.log('Browser does not support Geolocation');
    }
}


function showUserPosition(position){
    let location = position.coords.latitude + " " + position.coords.longitude;
}
button.addEventListener('click', getGeoLocation);


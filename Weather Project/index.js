const API_KEY = 'eee37ce1dcfcaac90103d48e243a9e44';
const grant = document.querySelector('.grant-location-section');
const input = document.querySelector('.input-section');
const yourCity = document.querySelector('.your-city-card');
const search = document.querySelector('[search]');
const yourWeather = document.querySelector('[your-weather]');
const searchInput = document.querySelector('[input-search]');
const searchImage = document.querySelector('[input-image]');
const loader = document.querySelector('[loader]');
const city = document.querySelector('[fetch-your-city]');
const weather = document.querySelector('[weather-type]')
const cloudsImage = document.querySelector('[clouds-image]')


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
            getWeatherLocationByCityName();
        }
    })
}
async function getWeatherLocationByCityName(){
    let city_name = searchInput.value;
    // add the class to show loader
    loader.classList.remove('loader-opacity');
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`)
    let data = await response.json();
    // remove the class of loader
    loader.classList.add('loader-opacity');
    city.textContent = data?.name;

    weather.textContent = data?.weather[0].main;
    if(weather.textContent === 'Clear'){
        cloudsImage.style.img = url('humidity.png');
    }
    






    yourCity.classList.remove('your-city-card-opacity');
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


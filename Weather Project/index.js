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
const weather = document.querySelector('[weather-type]');
const cloudsImage = document.querySelector('[clouds-image]');
const showTemperature = document.querySelector('[temperature]');
const windSpeed = document.querySelector('[wind-speed]');
const humidity = document.querySelector('[humidity]');
const clouds = document.querySelector('[clouds]');
const error = document.querySelector('[error-section]');
const flag = document.querySelector('[flag-icon]');
const errorMsg = document.querySelector('[error-msg]');

input.classList.add('input-section-opacity');
loader.classList.add('loader-opacity');
yourCity.classList.add('your-city-card-opacity');
error.classList.add('error-opacity');

error.classList.add('error-opacity');


let button = document.querySelector('[grant-button]');


function switchToSearch(){
    grant.classList.add('grant-location-section-opacity');
    input.classList.remove('input-section-opacity');
    yourCity.classList.add('your-city-card-opacity');
    loader.classList.add('loader-opacity');
   
    document.getElementById('input').focus();
   
}
function switchToYourWeather(){
    grant.classList.add('grant-location-section-opacity');
    input.classList.add('input-section-opacity');
    loader.classList.add('loader-opacity');
    yourCity.classList.remove('your-city-card-opacity');
    error.classList.add('error-opacity');

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
    yourCity.classList.add('your-city-card-opacity');
    error.classList.add('error-opacity');

    let city_name = searchInput.value;
    // add the class to show loader
    loader.classList.remove('loader-opacity');
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`)
    const data = await response.json();
    try{
        let icon =  data?.sys?.country;
        let code = icon.toLowerCase();
        flag.src = `https://flagcdn.com/144x108/${code}.png`;
        // remove the class of loader
        loader.classList.add('loader-opacity');
        city.textContent = data?.name;

        weather.textContent = data?.weather[0].main + ` (${data?.weather[0].description})`;
        cloudsImage.src = `https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`
        // if(weather.textContent === 'Clear'){
        //     cloudsImage.src = url('humidity.png');
        // }

        let tempKelvin = `${data?.main?.temp.toFixed(2)}`;
        let tempCelcius = tempKelvin - 273.15;
        showTemperature.textContent = tempCelcius.toFixed(2) + '°C';
        windSpeed.textContent = data?.wind?.speed + 'm/s';
        humidity.textContent = data?.main?.humidity + '%';
        clouds.textContent = data?.clouds?.all + '%';
        error.classList.add('error-opacity');
        yourCity.classList.remove('your-city-card-opacity');
    }
    catch(e){
        loader.classList.add('loader-opacity');


        error.classList.remove('error-opacity');
        errorMsg.textContent = data?.message;
        
    }
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


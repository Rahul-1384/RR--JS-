let content = document.querySelector('.all-loaders');


const API_KEY = 'eee37ce1dcfcaac90103d48e243a9e44';
function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    let temperature = (`${data?.main?.temp}`);
    newPara.textContent = temperature;    
    document.body.appendChild(newPara);
}

// A funtion to fetch data from server.
async function showWeather(){
    // const city_name = mathura;
    try{
        content.classList.add('.active');

        let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=red&appid=${API_KEY}`);
        let data = await api.json();

        content.classList.remove('.active');
        console.log("Weather data---> " , data);
        // A function to show the fetched weather data on UI.
        renderWeatherInfo(data);
    }
    catch(err){
        console.log('Error Found ' + err);
    }
}
showWeather();
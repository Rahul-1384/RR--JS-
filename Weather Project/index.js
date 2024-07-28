const API_KEY = 'eee37ce1dcfcaac90103d48e243a9e44';
function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    let temperature = (`${data?.main?.temp.toFixed(2)}` - 273.15);
    newPara.textContent = temperature.toFixed(2);    
    document.body.appendChild(newPara);
}

// A funtion to fetch data from server.
async function showWeather(){
    const lat = 27.4924;
    const lon = 77.6737;
    try{
        
        let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        let data = await api.json();
        console.log("Weather data---> " , data);
        // A function to show the fetched weather data on UI.
        renderWeatherInfo(data);
    }
    catch(err){
        console.log('Error Found ' + err);
    }
}
showWeather();
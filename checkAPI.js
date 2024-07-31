const API_KEY = 'f5494dd8ea66dd629c985ae34fb471b0';
async function showWeather(){
    const city = 'mathura';
    // const cnt = 10;
    const response = await  fetch(`https://pro.openweathermap.org/data/2.5/forecast/climate?q=London&appid=${API_KEY}`)
    console.log("hello");
    const data = await response.json();
    console.log(data);
}
showWeather();

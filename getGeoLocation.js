function getLiveLocate(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        console.log("Geolocation is not supported in your browser");
    }
}
function showPosition(position){
    let newPara = document.createElement('h1');
    newPara.innerText = "latitude" + position.coords.latitude + " Longitude: " + position.coords.longitude;

    document.body.appendChild(newPara);
}
getLiveLocate();
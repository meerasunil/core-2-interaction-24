//VARIABLES
//--------------------------
var key = '74a61ef544df52b749c8772159078f04';
var zip = 10011;

//API URL 
//-----------------------------
var URL = `https://api.openweathermap.org/data/2.5/weather?zip=10011&units=imperial&appid=${key}`;

//FETCH request 
//--------------------------------
fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then ((data) => {
        render(data);
    });

//RENDER FUNCTION 
//----------------------------
function render(data){
    //get html elements 
    var containerElement = document.querySelector('.Container');
    var weatherVaneElement = document.querySelector('.WeatherVane');
    var infoElement = document.querySelector('.Info');

    //edit info element 
    infoElement.innerHTML = `
        <h1>${10011}</h1>
        <p>Temp: ${data.main.temp} F</p>
        <p>Wind Direction: ${data.wind.deg} deg</p>
        <p>Wind Speed: ${data.wind.speed} mph </p>
    `;
    //edit the container 
    containerElement.style.background = `hsl(${data.main.temp}, 100%, 50%)`;

    //edit the weather vane 
    weatherVaneElement.style.transform = `rotate(${data.wind.deg}deg)`;
    weatherVaneElement.style.animationDuration = `${data.wind.speed / 20}s`;
    console.log(data);
}

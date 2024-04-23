//VARIABLES
//--------------------------
var key = '74a61ef544df52b749c8772159078f04';
var zip = 10462;

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
    var infoElement = document.querySelector('.Info');

    //edit info element 
    infoElement.innerHTML = `
        <h1>${10462}</h1>
        <p>Temp: ${data.main.temp_min} F</p>
        <p>Wind Direction: ${data.wind.deg} deg</p>
        <p>Wind Speed: ${data.wind.speed} mph </p>
    `;
    //edit the container 
    var temperature = data.main.temp;
    var backgroundColor = temperature < 60 ? 'hsl(195, 53%, 79%)' : 'orange';
    containerElement.style.background = backgroundColor;
    //edit the weather vane 
   
    console.log(data);
}

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
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error('Error:', error))

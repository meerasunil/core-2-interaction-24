//-------------SUN--------------//
var latitude = 40.8337625;
var longitude = -73.8583547;


var URL = `https://api.sunrisesunset.io/json?lat=${40.8337625}&lng=${-73.8583547}`


function fetchAndRender() {
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderCircle(data);
    })
    .catch(error => {
      console.error('Error fetching sunrise/sunset data:', error);
    });
}

function renderCircle(data) {
  const sunrise = new Date(`2024-04-23 ${data.results.sunrise}`);
  const sunset = new Date(`2024-04-23 ${data.results.sunset}`);

  const now = new Date();

  const totalDayDuration = sunset - sunrise;
  const elapsedTime = now - sunrise;
  const progress = elapsedTime / totalDayDuration;

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const circleRadius = 50;
  const circleX = 1 * progress;
  const circleY = canvas.height / 2;

  let circleColor = 'RED';
  if (now >= sunset) {
    circleColor = 'white';
  }

  ctx.beginPath();
  ctx.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
  ctx.fillStyle = circleColor;
  ctx.fill();
  ctx.closePath();
}


fetchAndRender();

//----------WEATHER----------------
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
        <p>Temp: ${data.main.temp} F</p>
        <p>Wind Direction: ${data.wind.deg} deg</p>
        <p>Wind Speed: ${data.wind.speed} mph </p>
    `;
    //edit the container 
    var temperature = data.main.temp;
    var backgroundColor = temperature < 55 ? 'hsl(195, 53%, 79%)' : 'orange';
    containerElement.style.background = backgroundColor;
    //edit the weather vane 
   
    console.log(data);
}

//-------------MOON--------------//
var URL = 'https://moon-phase.p.rapidapi.com/basic';
var key = 'fb17a5b661mshd65f0506b9963c2p1e4e6djsn1174d5435dae';


fetch(URL, {
	headers: {
		'x-rapidapi-host': 'moon-phase.p.rapidapi.com',
		'x-rapidapi-key': key,
	}
})
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
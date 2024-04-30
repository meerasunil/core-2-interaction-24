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

  console.log('Sunrise:', sunrise);
  console.log('Sunset:', sunset);
  console.log('Current time:', now);

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
  if (now >= sunrise && now <= sunset)

  ctx.beginPath();
  ctx.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
  ctx.fillStyle = circleColor;
  ctx.fill();
  ctx.closePath();
}

// Function to convert time string to milliseconds
function timeStringToMilliseconds(timeString) {
  const [hours, minutes, seconds] = timeString.split(':').map(Number);
  return hours * 3600000 + minutes * 60000 + seconds * 1000;
}

// Function to calculate color based on time range
function calculateColor(currentTime, dawnTime, sunriseTime, noonTime, goldenHourTime, sunsetTime, duskTime) {
  const currentMillis = timeStringToMilliseconds(currentTime);
  const dawnMillis = timeStringToMilliseconds(dawnTime);
  const sunriseMillis = timeStringToMilliseconds(sunriseTime);
  const noonMillis = timeStringToMilliseconds(noonTime);
  const goldenHourMillis = timeStringToMilliseconds(goldenHourTime);
  const sunsetMillis = timeStringToMilliseconds(sunsetTime);
  const duskMillis = timeStringToMilliseconds(duskTime);

  if (currentMillis >= dawnMillis && currentMillis < sunriseMillis) {
      // Dawn to Sunrise
      return 'linear-gradient(to bottom, blue, yellow)';
  } else if (currentMillis >= sunriseMillis && currentMillis < noonMillis) {
      // Sunrise to Noon
      return 'lightorange';
  } else if (currentMillis >= noonMillis && currentMillis < goldenHourMillis) {
      // Noon to Golden Hour
      return 'paleyellow';
  } else if (currentMillis >= goldenHourMillis && currentMillis < sunsetMillis) {
      // Golden Hour to Sunset
      return 'golden';
  } else if (currentMillis >= sunsetMillis && currentMillis < duskMillis) {
      // Sunset to Dusk
      return 'linear-gradient(to bottom, golden, blue)';
  } else {
      // Dusk to Dawn
      return 'nighttimeblue';
  }
}

// Example usage with provided data
const currentTime = "12:00:00 PM"; // Replace with actual current time
const dawnTime = "5:27:24 AM";
const sunriseTime = "5:57:01 AM";
const noonTime = "12:53:54 PM";
const goldenHourTime = "7:12:56 PM";
const sunsetTime = "7:50:46 PM";
const duskTime = "8:20:24 PM";

const backgroundColor = calculateColor(currentTime, dawnTime, sunriseTime, noonTime, goldenHourTime, sunsetTime, duskTime);
console.log(backgroundColor); // Output the calculated color


fetchAndRender();
/*
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

/*
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
	}).*/
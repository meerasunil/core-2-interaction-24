var latitude = 40.8337625; /*ny*/
var longitude = -73.8583547;
/*var latitude = 14.5995; manila 
var longitude = 120.9842;*/
var URL = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`;

// Function to parse time string and convert it to Date object
function parseTime(timeString) {
  const [hoursMinutesSeconds, period] = timeString.split(' ');
  const [hours, minutes, seconds] = hoursMinutesSeconds.split(':').map(Number);
  let hours24 = hours;
  if (period === 'PM' && hours !== 12) {
      hours24 += 12;
  } else if (period === 'AM' && hours === 12) {
      hours24 = 0;
  }
  const parsedDate = new Date();
  parsedDate.setHours(hours24, minutes, seconds);
  return parsedDate;
}

// Function to update the position of the sunflowers based on the position of the sun
function updateSunflowerPosition(sunPositionPercentage) {
    // Get all sunflower elements
    const sunflowers = document.querySelectorAll('.flower');

    // Loop through each sunflower and update its position
    sunflowers.forEach(sunflower => {
        // Adjust the position of the sunflower horizontally based on the sun's position
        const tankWidth = sunflower.clientWidth;
        sunflower.style.left = `calc(${sunPositionPercentage}% - ${tankWidth / 2}px)`;
        
        // You can rotate the sunflower here if needed
        sunflower.style.transform = `rotate(${20}deg)`;
    });
}

// Function to fetch data from the API and update the UI
function fetchData() {
  fetch(URL)
      .then(response => response.json())
      .then(data => {
          console.log('Data Results:', data);
          const { dawn, sunrise, solar_noon, golden_hour, sunset, dusk } = data.results;

          const currentTime = new Date();
          const currentTimestamp = currentTime.getTime();

          console.log('Current Time:', currentTime);

          const sunriseTime = parseTime(sunrise);
          const sunsetTime = parseTime(sunset);
          const dawnTime = parseTime(dawn);
          const duskTime = parseTime(dusk);
          const goldenHourTime = parseTime(golden_hour);
          const solarNoonTime = parseTime(solar_noon); 

          console.log('Parsed Sunrise Time:', new Date(sunriseTime));
          console.log('Parsed Sunset Time:', new Date(sunsetTime));
          console.log('Parsed Dawn Time:', new Date(dawnTime));
          console.log('Parsed Dusk Time:', new Date(duskTime));
          console.log('Parsed Golden Hour Time:', new Date(goldenHourTime));
          console.log('Parsed Solar Noon Time:', new Date(solarNoonTime));

          // Change background color based on current time
          if (currentTimestamp >= dawnTime && currentTimestamp < sunriseTime) {
              // Dawn to sunrise - Blue/Yellow gradient
              // Change background color to blue/yellow gradient
              document.body.style.background = 'linear-gradient(to bottom, blue, yellow)';
          } else if (currentTimestamp >= sunriseTime && currentTimestamp < solarNoonTime) {
              // Sunrise to noon - Light orange
              document.body.style.background = 'lightcoral';
          } else if (currentTimestamp >= solarNoonTime && currentTimestamp < goldenHourTime) {
              // Noon to golden hour - Pale yellow
              document.body.style.background = '#FEFFDE';
          } else if (currentTimestamp >= goldenHourTime && currentTimestamp < sunsetTime) {
              // Golden hour to sunset - Golden
              document.body.style.background = '#FFCA7B';
          } else if (currentTimestamp >= sunsetTime || currentTimestamp < duskTime) {
              // Sunset to dusk - Golden/Blue gradient
              // Change background color to golden/blue gradient
              document.body.style.background = 'linear-gradient(to bottom, goldenrod, blue)';
          } else {
              // Dusk to dawn - Nighttime blue
              document.body.style.background = 'navy';
          }
          
          const totalDayLength = duskTime.getTime() - dawnTime.getTime();
          const elapsedTime = currentTimestamp - dawnTime.getTime();
          const sunPositionPercentage = (elapsedTime / totalDayLength) * 100;
          
          // Adjust the position of your sun image on the page
          document.getElementById('sun').style.left = `${sunPositionPercentage}%`;

          // Update the position of the sunflowers
          updateSunflowerPosition(sunPositionPercentage);
      })
      .catch(error => console.error('Error fetching data:', error));
}

// Initial fetch and setup
fetchData();

// Fetch data and update UI every 60 seconds
setInterval(fetchData, 60000);

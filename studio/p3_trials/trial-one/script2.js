// Sunset/Sunrise API URL
var latitude = 40.8337625;
var longitude = -73.8583547;
var URL = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`;

// Function to fetch data from the API
function fetchData() {
  fetch(URL)
    .then(response => response.json())
    .then(data => {
    console.log('Data Results:', data.results);
      // Extract relevant data
      const { dawn, sunrise, solar_noon, golden_hour, sunset, dusk } = data.results;

      // Get current time
      const currentTime = new Date();
      const currentTimestamp = currentTime.getTime();

      console.log('Current Time:', currentTime);

      // Convert sunrise, sunset, and other timestamps to milliseconds
      const sunriseTime = new Date(`2024-04-30 ${sunrise}`).getTime();
      const sunsetTime = new Date(`2024-04-30 ${sunset}`).getTime();
      const dawnTime = new Date(`2024-04-30 ${dawn}`).getTime();
      const duskTime = new Date(`2024-04-30 ${dusk}`).getTime();
      const goldenHourTime = new Date(`2024-04-30 ${golden_hour}`).getTime();
      const solarNoonTime = new Date(`2024-04-30 ${solar_noon}`).getTime();

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
        document.body.style.background = 'goldenrod';
      } else if (currentTimestamp >= sunsetTime && currentTimestamp < duskTime) {
        // Sunset to dusk - Golden/Blue gradient
        // Change background color to golden/blue gradient
        document.body.style.background = 'linear-gradient(to bottom, goldenrod, blue)';
      } else {
        // Dusk to dawn - Nighttime blue
        document.body.style.background = 'navy';
      }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Call fetchData function to fetch data from API and change background color
fetchData();

// Update background color every minute
setInterval(fetchData, 60000);


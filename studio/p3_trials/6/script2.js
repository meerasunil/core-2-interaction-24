// Sunset/Sunrise API URL
var latitude = 40.8337625;
var longitude = -73.8583547;
/*var latitude = 14.5995;
var longitude = 120.9842;*/
var URL = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`;

// Function to parse time string in format HH:MM:SS AM/PM and convert it to milliseconds
// Function to parse time string in format HH:MM:SS AM/PM and convert it to milliseconds
// Function to parse time string in format HH:MM:SS AM/PM and convert it to milliseconds
// Function to parse time string in format HH:MM:SS AM/PM and convert it to milliseconds
// Function to parse time string in format HH:MM:SS AM/PM and convert it to milliseconds
// Function to parse time string in format HH:MM:SS AM/PM and convert it to Date object
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

// Function to fetch data from the API
function fetchData() {
  fetch(URL)
      .then(response => response.json())
      .then(data => {
          console.log('Data Results:', data);
          // Extract relevant data
          const { dawn, sunrise, solar_noon, golden_hour, sunset, dusk } = data.results;

          // Get current time
          const currentTime = new Date();
          const currentTimestamp = currentTime.getTime();

          console.log('Current Time:', currentTime);

          // Convert sunrise, sunset, and other timestamps to milliseconds
          const sunriseTime = parseTime(sunrise);
          const sunsetTime = parseTime(sunset);
          const dawnTime = parseTime(dawn);
          const duskTime = parseTime(dusk);
          const goldenHourTime = parseTime(golden_hour);
          // Calculate solar noon
          const solarNoonTime = new Date((sunriseTime.getTime() + sunsetTime.getTime()) / 2);


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
              document.body.style.background = 'papayawhip';
          } else if (currentTimestamp >= goldenHourTime && currentTimestamp < sunsetTime) {
              // Golden hour to sunset - Golden
              document.body.style.background = 'goldenrod';
          } else if (currentTimestamp >= sunsetTime || currentTimestamp < duskTime) {
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

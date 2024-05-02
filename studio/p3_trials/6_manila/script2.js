var latitude = 14.5995;
var longitude = 120.94842;
var timezoneURL = `https://maps.googleapis.com/maps/api/timezone/json?location=${latitude},${longitude}&timestamp=${Math.floor(Date.now() / 1000)}&key=AIzaSyAYNeA15Y6Nb6D0FXkDlNuc8MEQsx4XBeE`;

var sunrisesunsetURL = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`;

function parseTime(timeString, timezoneOffset) {
    if (!timeString) {
        return null;
    }
    const [hoursMinutesSeconds, period] = timeString.split(' ');
    const [hours, minutes, seconds] = hoursMinutesSeconds.split(':').map(Number);
    let hours24 = hours;
    if (period === 'PM' && hours !== 12) {
        hours24 += 12;
    } else if (period === 'AM' && hours === 12) {
        hours24 = 0;
    }
    const parsedDate = new Date();
    parsedDate.setUTCHours(hours24 + timezoneOffset, minutes, seconds);
    return parsedDate;
}

function fetchData() {
    fetch(timezoneURL)
        .then(response => response.json())
        .then(timezoneData => {
            const timezoneOffset = (timezoneData.rawOffset + timezoneData.dstOffset) / 3600; // Convert seconds to hours
            fetch(sunrisesunsetURL)
                .then(response => response.json())
                .then(data => {
                    if (!data.results) {
                        console.error('Error: No results found in data.');
                        return;
                    }

                    const { dawn, sunrise, solar_noon, golden_hour, sunset, dusk } = data.results;

                    // Adjust current time based on timezone offset
                    const currentTime = new Date(Date.now() + (timezoneOffset * 3600 * 1000)); // Add timezone offset in milliseconds
                    const currentTimestamp = currentTime.getTime();

                    console.log('Current Time:', currentTime);
                    //Parsing solar times 
                    const sunriseTime = parseTime(sunrise, timezoneOffset);
                    const sunsetTime = parseTime(sunset, timezoneOffset);
                    const dawnTime = parseTime(dawn, timezoneOffset);
                    const duskTime = parseTime(dusk, timezoneOffset);
                    const goldenHourTime = parseTime(golden_hour, timezoneOffset);
                    const solarNoonTime = parseTime(solar_noon, timezoneOffset);

                    console.log('Parsed Sunrise Time:', sunriseTime);
                    console.log('Parsed Sunset Time:', sunsetTime);
                    console.log('Parsed Dawn Time:', dawnTime);
                    console.log('Parsed Dusk Time:', duskTime);
                    console.log('Parsed Golden Hour Time:', goldenHourTime);
                    console.log('Parsed Solar Noon Time:', solarNoonTime);

                    // Change background color based on current time
                    if (currentTimestamp >= sunriseTime.getTime() && currentTimestamp < sunsetTime.getTime()) {
                        // Daytime
                        document.body.style.background = '#FFF'; // Set background color for daytime
                    } else {
                        // Nighttime
                        document.body.style.background = '#000'; // Set background color for nighttime
                    }

                    console.log(document.body.style.background);
                })
                .catch(error => console.error('Error fetching sunrise-sunset data:', error));
        })
        .catch(error => console.error('Error fetching timezone data:', error));
}

fetchData();

// Retrieval every minute 
setInterval(fetchData, 60000);

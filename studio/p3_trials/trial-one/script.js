const latitude = 40.8337625
const longitude = -73.8583547
const url = `https://api.sunrisesunset.io/json?lat=${40.8337625}&lng=${-73.8583547}`


fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error('Error:', error))


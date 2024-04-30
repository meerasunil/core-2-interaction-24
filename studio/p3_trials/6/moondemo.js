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
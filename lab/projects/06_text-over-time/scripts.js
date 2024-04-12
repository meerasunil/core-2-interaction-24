const secondsHand = document.querySelector('.Hand--seconds');
setInterval(() => {

	
	const dateObject = new Date();

	
	
	const seconds = dateObject.getSeconds();
	console.log(seconds);

	
	
	
	secondsHand.style.transform = `rotate(${ seconds * (360 / 60) }deg)`;

}, 1000)
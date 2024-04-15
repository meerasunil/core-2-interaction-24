const secondsHand = document.querySelector('.Hand--seconds');
setInterval(() => {

	
	const dateObject = new Date();

	
	
	const seconds = dateObject.getSeconds();
	console.log(seconds);

	
	
	
	
	secondsHand.style.transform = `skewX(${ seconds * (90 / 10) }deg)`;
}, 1000)
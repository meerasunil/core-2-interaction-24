// SELECTING ANY HTML ELEMENT
// --------------------------------------------

var containerElement = document.querySelector('.Container');


// INSERT ALL COSTUMES
// --------------------------------------------

// color swatch function
function insertColorSwatches(costume) {

	// get the relevant kirby element using the data-costume html attribute
	var kirbyElement = document.querySelector(`.Kirby[data-costume="${ costume.title }"]`);

	// add swatches to kirby element HTML
	costume['colors'].forEach((color) => {
		kirbyElement.innerHTML += `
			<div class="Swatch" style="background: ${ color }"></div>
		`;
	});
}

// single costume function
function insertCostume(costume) {

	// add to the container HTML
	containerElement.innerHTML += `
		<article class="Kirby" data-costume="${ costume['title'] }">
			<h2>${ costume['title'] }</h2>
			<img src="media/${ costume['image'] }"/>
			<p>${ costume['powers'] }</p>
		</article>
	`;

	// insert color swatches
	insertColorSwatches(costume);

}

// multiple costume function
function insertCostumes(costumes) {

	// empty the container element
	containerElement.innerHTML = '';

	// run function to insert a single costume
	costumes.forEach((costume) => {
		insertCostume(costume);
	});

}

// run function to insert multiple costumes
insertCostumes(costumes);


// FILTER COSTUMES BY COLOR
// --------------------------------------------

// detect if a costume includes colors
// console.log(costumes[0]['colors'].includes('red'));

// get all costumes with a single color
// var redCostumes = costumes.filter((costume) => {
// 	return costume['colors'].includes('red');
// });
// var blueCostumes = costumes.filter((costume) => {
// 	return costume['colors'].includes('blue');
// });
// var greenCostumes = costumes.filter((costume) => {
// 	return costume['colors'].includes('green');
// });

// define color filter function
function getCostumesWithColor(color) {

	// define the variable
	var costumesWithColor = costumes.filter((costume) => {
		return costume['colors'].includes(color);
	});

	// return the results
	return costumesWithColor;
}


// BUTTON EVENT LISTENER
// --------------------------------------------

// get all of the button elements
var colorButtonElements = document.querySelectorAll('.ColorControls input');

colorButtonElements.forEach((button) => {
	button.addEventListener('click', (event) => {
		var color = event.target.value;
		var costumes = getCostumesWithColor(color);
		insertCostumes(costumes);
	});
});
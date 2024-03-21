// DATA OBJECTS
// --------------------------------------------

// log the costumes array
// console.log('costumes :', costumes);

// log property with bracket notation
// console.log("costumes[0]['title'] :", costumes[0]['title']);

// log property with dot notation
// console.log("costumes[0].title :", costumes[0].title);


// CONSOLE AND DOCUMENT OBJECTS
// --------------------------------------------

// log the console object
// console.log('console :', console);

// log the document
// console.log('document :', document);

// log the document element
// console.log('document :', document.documentElement);


// EDIT THE DOCUMENT ELEMENT
// --------------------------------------------

// 1. direct
// document.documentElement.style.backgroundColor = 'green';

// 2. function
// function setBackgroundColor() {
//	document.documentElement.style.backgroundColor = 'green';
// }

// 3. function with param
function setBackgroundColor(color) {
	document.documentElement.style.backgroundColor = color;
}
setBackgroundColor('pink');


// SELECTING ANY HTML ELEMENT
// --------------------------------------------

// set mainElement variable
var mainElement = document.querySelector('.Main');


// UPDATING AN HTML ELEMENT
// --------------------------------------------

// 1. direct
// mainElement.style.backgroundColor = 'white';
// mainElement.innerHTML = 'Hello World!';

// 2. with object prop
// mainElement.innerHTML = costumes[0]['title'];

// 3. function
// function insertCostumeData() {
// 	mainElement.innerHTML = costumes[0]['title'];
// }

// 4. function with param
function insertCostumeData(costume) {

	// A. swap inner html (test running fn multiple times)
	// mainElement.innerHTML = costume['title'];

	// B. add to inner html
	// mainElement.innerHTML += costume['title'];

	// C. basic html
	// mainElement.innerHTML += `
	// 	<p>
	// 		${ costume['title'] }
	// 	</p>
	// `;

	// C. advanced html
	mainElement.innerHTML += `
		<article class="Kirby" data-costume="${ costume['title'] }">
			<h2>${ costume['title'] }</h2>
			<img src="media/${ costume['image'] }"/>
			<p>${ costume['powers'] }</p>
		</article>
	`;
}

// manual insertion
// insertCostumeData(costumes[0]); 
// insertCostumeData(costumes[1]);
// insertCostumeData(costumes[2]);


// FOR EACH LOOPS
// --------------------------------------------

// run fn for each element in array
costumes.forEach((costume) => {
	insertCostumeData(costume);
});


// ADDING SWATCHES
// --------------------------------------------

// get the beam costume data
// var beamCostumeColors = costumes[0]['colors'];
// console.log(beamCostumeColors);

// get the beam Kirby element
// var beamKirbyElement = document.querySelector('.Kirby[data-costume="Beam"]');
// console.log(beamKirbyElement);

// beamCostumeColors.forEach((color) => {
// 	beamKirbyElement.innerHTML += `
// 		<div class="Swatch" style="background: ${ color }"></div>
// 	`;
// });

function insertSwatchData(costume) {

	// get the kirby element from the costume title
	var kirbyElement = document.querySelector(`.Kirby[data-costume="${ costume.title }"]`);

	// insert the swatches from the costume colors
	costume['colors'].forEach((color) => {
		kirbyElement.innerHTML += `
			<div class="Swatch" style="background: ${ color }"></div>
		`;
	});
}

// manual insertion
// insertSwatchData(costumes[0]); 
// insertSwatchData(costumes[1]);
// insertSwatchData(costumes[2]);


// SWATCH FOR EACH LOOPS
// --------------------------------------------

// run fn for each element in array
costumes.forEach((costume) => {
	insertSwatchData(costume);
});
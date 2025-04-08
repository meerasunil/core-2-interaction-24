function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
}
function draw() {
 //when mouse button is pressed, circles turn black
if (mouseIsPressed === true) {
  fill('red');
} else {
  fill(255);
}


//white circles drawn at mouse position
circle(mouseX, mouseY, 100);

console.log("p5.js is running!");
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
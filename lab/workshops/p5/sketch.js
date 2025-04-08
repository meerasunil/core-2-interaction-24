let circles = []; // Array to store circle positions

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke(); // Remove outline from shapes
}

function draw() {
  // Draw the background
  background(135, 206, 235); // Sky blue color
  
  for (let x = 0; x<3; x++){
    ellipse(100*x+500, height/2, 100,100);
    ellipse(width/2,100*x+100, 100, 100);
    console.log(x);
  }
  // Draw the sun
  fill("yellow");
  stroke("orange");
  strokeWeight(20);
  circle(windowWidth - 100, 100, 200); // Sun

  // Draw grass
  stroke(0);
  strokeWeight(1);
  fill("green");
  rect(0, windowHeight / 2, windowWidth, windowHeight / 2); // Grass

  // Draw emojis
  textSize(90);
  text("🌸", 900, windowHeight - 100); // Flower
  text("🌸", 700, windowHeight - 100); // Flower
  text("🌸", 500, windowHeight - 100); // Flower
  text("🐞", 300, 250); // Ladybug

  // Store circle positions for the trail
  let currentCircle = {
    x: mouseX,
    y: mouseY,
    color: mouseIsPressed ? 'red' : 'white', // Color changes on click
  };
  
  // Add the new circle to the array
  circles.push(currentCircle);
  
  // Draw all circles from the array
  for (let i = 0; i < circles.length; i++) {
    fill(circles[i].color);
    circle(circles[i].x, circles[i].y, 100); // Draw circle at stored position
  }

  // Optional: Remove circles over time to create fading effect
  if (circles.length > 200) {
    circles.shift(); // Remove the oldest circle
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Resize the canvas when window is resized
}

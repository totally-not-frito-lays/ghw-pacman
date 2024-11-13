const speed = 0.05;
let t = 0;

function setup() {
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("sketch");
  describe('A yellow circle on a black background. The circle opens and closes its mouth.');
}

function draw() {
  background(0);
  pacman(50, 50);
  lettuce();
}

function pacman(x, y) {
  
  // Style the arc.
  noStroke();
  fill(255, 255, 0);

  // Update start and stop angles.
  const biteSize = PI / 6;
  let startAngle;
  let endAngle;

  // Draw the arc.
  if (clock() < 50) {
    startAngle = biteSize;
    endAngle = TWO_PI - startAngle;
  } else {
    startAngle = 0;
    endAngle = TWO_PI - PI/12;
  }
  arc(x, y, 80, 80, startAngle, endAngle, PIE);
  
  fill(0);
  circle(x + 7, y - 20, 15);
}

function lettuce() {
  let lettuces = [];
  textSize(64);
  text("🥬", 100, 200);
}

function clock() {
  let deltaT = speed * deltaTime;
  t += deltaT;
  
  if (t > 100) {
    t = 0;
  }
  return t;
}
const speed = 0.05;
let t = 0;

function setup() {
  let myCanvas = createCanvas(200, 200);
  myCanvas.parent("sketch");
  describe('A yellow circle on a black background. The circle opens and closes its mouth.');
}

function draw() {
  background(0);
  let x = 50;
  let y = 50;
  lettuceStream(x * 4, y + y / 2, 48);
  pacman(50, 50);
}

function lettuceStream(x, y, r) {
  let lettuces = [];
  for (let i = 0; i < 10; i++) {
    lettuces[i] = new Lettuce(x, y, r);
    x += r;
    lettuces[i].move();
  }
  
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
  if (clock() % 50 < 25) {
    startAngle = 0;
    endAngle = TWO_PI; // - PI / 12;
  } else {
    startAngle = biteSize;
    endAngle = TWO_PI - startAngle;
  }
  arc(x, y, 80, 80, startAngle, endAngle, PIE);
  
  fill(0);
  circle(x + 7, y - 20, 15);
}

function clock() {
  let deltaT = speed * deltaTime;
  t += deltaT;
  
  if (t > 600) {
    t = 0;
  }
  return t;
}
let x,
  y,
  d = 25,
  vx = 5,
  vy = 2;

function setup() {
  createCanvas(400, 400);
  (x = width / 2), (y = height / 2);
}

function draw() {
  background(220);
  circle(x, y, d);
  x += vx;
  y += vy;
  if (x > width - d / 2) {
    x = width - d / 2;
    vx = -random(1, 20);
  }
  if (x < d / 2) {
    x = d / 2;
    vx = random(1, 20);
  }
  if (y > height - d / 2) {
    y = height - d / 2;
    vy = -random(1, 20);
  }
  if (y < d / 2) {
    y = d / 2;
    vy = random(1, 20);
  }
}

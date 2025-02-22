let x,
  y,
  d = 25,
  velocidade = 5;

function setup() {
  createCanvas(400, 400);
  (x = width / 2), (y = height / 2);
}

function draw() {
  background(220);
  circle(x, y, d);
  x += velocidade;
  if (x >= width - d / 2 || x <= d / 2) {
    velocidade = -velocidade;
  }
}

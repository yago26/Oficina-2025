let x,
  y,
  raio = 25;
let gravidade = 0.5,
  velocidadeAtual = 0;

function setup() {
  createCanvas(400, 400);
  (x = width / 2), (y = height / 2);
}

function draw() {
  background(220);
  circle(x, y, raio * 2);
  if (mouseIsPressed) {
    x = mouseX;
    y = mouseY;
    velocidadeAtual = 0;
  }
  velocidadeAtual += gravidade;
  y += velocidadeAtual;
  if (y >= height - raio) {
    y = height - raio;
    velocidadeAtual *= -0.8;
  }
}

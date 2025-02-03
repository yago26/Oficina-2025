let circulo;
let circulos = [];

function setup() {
  createCanvas(400, 400);
  circulo = {
    x: width / 2,
    y: height / 2,
    raio: 50,
    visivel: true,
    mostrar: function () {
      if (!this.visivel) return;
      circle(this.x, this.y, this.raio * 2);
    },
    sobMouse: function () {
      return dist(mouseX, mouseY, this.x, this.y) <= this.raio;
    },
  };
  for (let i = 0; i < 50; i++) {
    circulos.push({
      x: width / 2,
      y: height / 2,
      raio: 2.5,
      vx: random(-10, 10),
      vy: random(-10, 10),
      mostrar: function () {
        circle(this.x, this.y, this.raio * 2);
      },
      mover: function () {
        this.x += this.vx;
        this.y += this.vy;
      },
    });
  }
}

function draw() {
  background(220);
  circulo.mostrar();
  if (!circulo.visivel) {
    for (let circ of circulos) {
      circ.mostrar();
      circ.mover();
    }
  }
}

function mouseClicked() {
  if (circulo.sobMouse()) circulo.visivel = false;
}

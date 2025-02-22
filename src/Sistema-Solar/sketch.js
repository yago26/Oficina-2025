let sol;
let planetas = [];
let posEstrelas = [];
const CORES_PLANETAS = [
  "orange" /* Mercúrio */,
  "goldenrod" /* Vênus */,
  "lightgreen" /* Terra */,
  "red" /* Marte */,
  "brown" /* Júpiter */,
  "goldenrod" /* Saturno */,
  "lightblue" /* Urano */,
  "blue" /* Netuno */,
];
const MASSA_PLANETAS = [0.7, 1, 1.2, 0.6, 2.5, 2, 1.5, 1.6];

function setup() {
  createCanvas(windowWidth, windowHeight);
  sol = new CorpoCeleste(width / 2, height / 2, 50, "yellow", 0);

  for (let i = 0; i < 8; i++) {
    planetas.push(
      new Planeta(
        sol,
        100 + i * 50,
        0.025 / 2 ** i,
        CORES_PLANETAS.shift(),
        MASSA_PLANETAS.shift(),
        i === 2 ? true : false
      )
    );
  }

  for (let i = 0; i < 200; i++) {
    posEstrelas[i] = { x: random(width), y: random(height) };
  }
}

function draw() {
  background(0);
  sol.mostrar();
  for (let planeta of planetas) {
    planeta.mover();
    planeta.mostrar();
  }
  for (let pos of posEstrelas) {
    push();
    stroke("white");
    point(pos.x, pos.y);
    pop();
  }
}

// Classe para o Sol
class CorpoCeleste {
  constructor(x, y, raio, cor, massa) {
    this.x = x;
    this.y = y;
    this.raio = raio;
    this.cor = cor;
    this.massa = massa;
  }
  mostrar() {
    fill(this.cor);
    noStroke();
    circle(this.x, this.y, this.raio * 2);
  }
}

// Classe para os planetaas
class Planeta {
  constructor(sol, distancia, velocidade, cor, massa, possuiLua) {
    this.sol = sol;
    this.distancia = distancia;
    this.velocidade = velocidade;
    this.angulo = random(TWO_PI); // Posição inicial aleatória
    this.cor = cor;
    this.massa = massa;

    this.x = this.sol.x + this.distancia * cos(this.angulo);
    this.y = this.sol.y + this.distancia * sin(this.angulo);

    this.rastroDePontos = [];
    this.pararDeRastrear = false;
    this.posicaoInicial = { x: this.x, y: this.y };

    this.possuiLua = possuiLua;
    this.velocidadeLua = 0.025;
    this.anguloLua = random(TWO_PI);
  }

  mostrar() {
    push();
    // POSIÇÕES
    this.x = this.sol.x + this.distancia * cos(this.angulo);
    this.y = this.sol.y + this.distancia * sin(this.angulo);

    if (this.possuiLua) {
      fill(150);
      circle(
        this.x + 25 * cos(this.anguloLua),
        this.y + 25 * sin(this.anguloLua),
        10
      );
      this.anguloLua += this.velocidadeLua;
    }

    // MOSTRANDO RASTRO DO PLANETA
    if (
      dist(this.x, this.y, this.posicaoInicial.x, this.posicaoInicial.y) <
      (1 / this.massa) * this.velocidade
    ) {
      this.pararDeRastrear = true;
    }
    if (!this.pararDeRastrear) {
      this.rastroDePontos.push({ x: this.x, y: this.y });
    }

    noFill();
    stroke("white");
    beginShape();
    for (let rastro of this.rastroDePontos) {
      vertex(rastro.x, rastro.y);
    }
    endShape();

    if (this.rastroDePontos.length > 500 / this.velocidade) {
      this.rastroDePontos.shift();
    }

    // MOSTRANDO PLANETA
    fill(this.cor);
    noStroke();

    circle(this.x, this.y, 20 * this.massa);

    pop();
  }

  mover() {
    this.angulo += this.velocidade;
  }
}

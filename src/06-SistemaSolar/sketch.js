let sol;
let planetas = [];
let posEstrelas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  sol = new CorpoCeleste(width / 2, height / 2, 50, color(255, 204, 0), 0);
  // Sol
  planetas.push(new Planeta(sol, 100, 0.025, color(100, 100, 255), 1));
  // planetaa 1
  planetas.push(new Planeta(sol, 150, 0.01, color(255, 100, 100), 0.7));
  // planetaa 2
  planetas.push(new Planeta(sol, 200, 0.005, color(100, 255, 100), 2));
  // planetaa 3
  for (let i = 0; i < 200; i++) {
    posEstrelas[i] = { x: random(width), y: random(height) };
  }
}

function draw() {
  background(0);
  // Desenha o Sol
  sol.mostrar();
  // Atualiza e desenha os planetaas
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
    ellipse(this.x, this.y, this.raio * 2, this.raio * 2);
  }
}

// Classe para os planetaas
class Planeta {
  constructor(sol, distancia, velocidade, cor, massa) {
    this.sol = sol;
    this.distancia = distancia;
    this.velocidade = velocidade;
    this.angulo = random(TWO_PI);
    // Posição inicial aleatória
    this.cor = cor;
    this.massa = massa;
  }
  mover() {
    let gravidade =
      (this.sol.massa * this.massa) / (this.distancia * this.distancia);
    this.angulo += this.velocidade;
  }
  mostrar() {
    let x = this.sol.x + this.distancia * cos(this.angulo);
    let y = this.sol.y + this.distancia * sin(this.angulo);
    fill(this.cor);
    noStroke();
    ellipse(x, y, 20 * this.massa, 20 * this.massa);
  }
}

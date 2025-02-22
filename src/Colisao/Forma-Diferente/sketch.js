let quadrado1 = {
  iniciar: function (x, y, vx, vy, tamanho) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.tamanho = tamanho;
  },
  mostrar: function () {
    square(this.x, this.y, this.tamanho);
  },
  mover: function () {
    if (this.x >= width - this.tamanho) {
      this.x = width - this.tamanho;
      this.vx *= -1;
    }
    if (this.x <= 0) {
      this.x = 0;
      this.vx *= -1;
    }
    if (this.y >= height - this.tamanho) {
      this.y = height - this.tamanho;
      this.vy *= -1;
    }
    if (this.y <= 0) {
      this.y = 0;
      this.vy *= -1;
    }
    this.x += this.vx;
    this.y += this.vy;
  },
  colidiu: function (objeto) {
    if (
      this.x <= objeto.x + objeto.tamanho &&
      this.x + this.tamanho >= objeto.x &&
      this.y <= objeto.y + objeto.tamanho &&
      this.y + this.tamanho >= objeto.y
    ) {
      this.vx *= -1;
      this.vy *= -1;
      objeto.vx *= -1;
      objeto.vy *= -1;
    }
  },
};

let quadrado2 = {
  iniciar: function (x, y, vx, vy, tamanho) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.tamanho = tamanho;
  },
  mostrar: function () {
    square(this.x, this.y, this.tamanho);
  },
  mover: function () {
    if (this.x >= width - this.tamanho) {
      this.x = width - this.tamanho;
      this.vx *= -1;
    }
    if (this.x <= 0) {
      this.x = 0;
      this.vx *= -1;
    }
    if (this.y >= height - this.tamanho) {
      this.y = height - this.tamanho;
      this.vy *= -1;
    }
    if (this.y <= 0) {
      this.y = 0;
      this.vy *= -1;
    }
    this.x += this.vx;
    this.y += this.vy;
  },
  colidiu: function (objeto) {
    return (
      this.x <= objeto.x + objeto.tamanho &&
      this.x + this.tamanho >= objeto.x &&
      this.y <= objeto.y + objeto.tamanho &&
      this.y + this.tamanho >= objeto.y
    );
  },
};

function setup() {
  createCanvas(400, 400);
  quadrado1.iniciar(
    random(200),
    random(200),
    random(-10, 10),
    random(-10, 10),
    50
  );
  quadrado2.iniciar(
    random(200, 400),
    random(200, 400),
    random(-10, 10),
    random(-10, 10),
    20
  );
}

function draw() {
  background(220);
  quadrado1.mostrar();
  quadrado1.mover();
  quadrado2.mostrar();
  quadrado2.mover();
  quadrado1.colidiu(quadrado2);
}

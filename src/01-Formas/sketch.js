let pointer;
let step = 20;
let trsx, trsy;
let objects = ["NUL", "REC", "TRI", "CIR"];
let curDraw = 0;

function setup() {
  createCanvas(800, 600);
  pointer = createVector(width / 2, height / 2);
  trsx = trsy = 20;
}

function draw() {
  background(255);
  let wEnd = width - step;
  let hEnd = height - step;

  push();

  translate(step, step);
  strokeWeight(2);
  stroke("lightgray");
  for (let i = 0; i < wEnd / 20; i++) {
    line(i * step, -5, i * step, height);
  }

  for (let i = 0; i < hEnd / 20; i++) {
    line(-5, i * step, width, i * step);
  }
  fill("black");
  stroke("black");
  line(0, 0, wEnd, 0);
  triangle(wEnd, 0, wEnd - 5, -3, wEnd - 5, 3);
  line(0, 0, 0, hEnd);
  triangle(0, hEnd, -3, hEnd - 5, 3, hEnd - 5);

  textAlign(CENTER, CENTER);
  textSize(16);
  noStroke();
  text("x", wEnd - 10, -10);
  text("y", -10, hEnd - 10);
  stroke(0);
  pop();

  let x = round(pointer.x / step) * step;
  let y = round(pointer.y / step) * step;
  push();
  stroke("blue");
  line(trsx, y, x, y);
  line(x, trsy, x, y);
  stroke("red");
  fill("red");
  text(`x=${x / step - 1}`, x + 5, 30);
  text(`y=${y / step - 1}`, 25, y + 10);
  // text("y", -10, hEnd - 10);
  stroke(0);
  strokeWeight(2);
  pop();

  push();
  if (objects[curDraw] == "REC") {
    rect(x, y, 5 * step, 3 * step);
    circle(x + 100, y + 60, 4);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(14);
    text(`L=5`, x + 50, y + 70);
    text(`A=3`, x - 17, y + 30);
    textAlign(LEFT, CENTER);
    text(`(x=${x / step - 1 + 5}, y=${y / step - 1 + 3})`, x + 110, y + 60);
    stroke(0);
  } else if (objects[curDraw] == "CIR") {
    noFill();
    circle(x, y, 80);
    circle(x, y, 4);
  } else if (objects[curDraw] == "TRI") {
    triangle(x, y, x - 1 * step, y + 3 * step, x + 1 * step, y + 3 * step);
    circle(x - 1 * step, y + 3 * step, 4);
    circle(x + 1 * step, y + 3 * step, 4);

    noStroke();
    textSize(14);
    textAlign(LEFT, CENTER);
    text(
      `(Ax=${round((x - 1) / step - 1 - 1)}, y=${round(
        (y + 3) / step - 1 + 3
      )})`,
      x - 1 * step - 80,
      y + 3 * step + 15
    );
    text(
      `(Bx=${round((x + 1) / step)}, y=${round((y + 3) / step - 1 + 3)})`,
      x - 1 * step + 40,
      y + 3 * step + 15
    );
    stroke(0);
  }
  pop();
  circle(x, y, 4);
  strokeWeight(1);
  noStroke();
  textSize(14);
  textAlign(LEFT, CENTER);
  text(`(x=${x / step - 1}, y=${y / step - 1})`, x + 10, y - 15);
  stroke(0);
}

function mouseMoved() {
  pointer.x = mouseX;
  pointer.y = mouseY;
}

function keyPressed() {
  if (keyCode == 32) {
    curDraw = (curDraw + 1) % objects.length;
    print(curDraw);
  }
}

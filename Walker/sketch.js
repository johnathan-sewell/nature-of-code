// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;

function setup() {
  createCanvas(640, 240);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step();
  walker.show();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(1);
    point(this.x, this.y);
  }

  step() {
    // const xStep = random(2) - 1;
    // const yStep = random(2) - 1;

    const probability = 0.1;
    const randomNumber = random(1);

    let xStep;
    let yStep;

    if (randomNumber < probability) {
      xStep = mouseX > this.x ? 1 : -1;
      yStep = mouseY > this.y ? 1 : -1;
    } else {
      xStep = floor(random(3)) - 1;
      yStep = floor(random(3)) - 1;
    }

    console.log(xStep, yStep);

    this.x += xStep;
    this.y += yStep;

    console.log(this.x, this.y);
  }
}

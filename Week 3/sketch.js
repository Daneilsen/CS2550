var drops = [];

function setup() {
  angleMode(DEGREES)
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 800; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(18, 18, 18);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}

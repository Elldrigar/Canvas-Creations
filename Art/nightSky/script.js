var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//Canvas BG
//ctx.globalCompositeOperation = 'destination-over'
var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
my_gradient.addColorStop(0, 'black');
// my_gradient.addColorStop(0.4, "purple");
my_gradient.addColorStop(0.5, 'blue');
my_gradient.addColorStop(1, 'purple');
ctx.fillStyle = my_gradient;
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

function circle(x, y, r, c, col) {
  ctx.beginPath();
  ctx.arc(x, y, r, c, 2 * Math.PI);
  ctx.fillStyle = col;
  ctx.fill();
}

function line(x1, y1, x2, y2, w) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = w;
  ctx.stroke();
}

//Rectangles
ctx.beginPath();
ctx.rect(-30, 80, 80, 80);
ctx.fillStyle = 'black';
ctx.fill();

//circle(220, 40, 20, 3.1, "white");
circle(220, 40, 20, 0, 'white');

circle(55, 140, 60, 0, 'black');

circle(110, 150, 30, 0, 'black');

circle(200, 20, 1, 0, 'white');

circle(150, 60, 1, 0, 'white');

circle(50, 30, 1.5, 0, 'white');

circle(90, 80, 1, 0, 'white');

circle(250, 10, 1, 0, 'white');

circle(110, 10, 1, 0, 'white');

circle(80, 40, 1, 0, 'white');

circle(290, 40, 1, 0, 'white');

circle(25, 70, 1, 0, 'white');

circle(30, 5, 1, 0, 'white');

circle(210, 80, 1, 0, 'white');

line(140, 80, 95, 150, 10);

line(150, 38, 138, 81, 7);

line(250, 0, 142, 81, 5);

line(150, 0, 146, 50, 5);

line(180, 0, 148, 50, 5);

line(220, 0, 210, 30, 5);

line(0, 0, 0, 100, 15);

line(30, 0, 3, 30, 5);

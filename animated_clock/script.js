const now = new Date();
const myCanvas = document.querySelector("#canvas");
const ctx = myCanvas.getContext("2d");

myCanvas.style.border = "1px solid black";

ctx.save(); // save the default state
ctx.clearRect(0, 0, 500, 500);
ctx.translate(250, 250); // Put 0,0 in the middle
ctx.rotate(-Math.PI / 2);

// default style
ctx.fillStyle = "#cfeb9b";
ctx.strokeStyle = "#ed806f";
ctx.lineCap = "round";

// Draw clock face & border
ctx.save();
ctx.beginPath();
ctx.lineWidth = 14;
ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();
ctx.retore();

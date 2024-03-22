const myCanvas = document.querySelector("#canvas");
const borderColor = document.getElementById("border-color");
const faceColor = document.getElementById("face-color");
const hourLineColor = document.getElementById("lineHour-color");
const minuteLineColor = document.getElementById("lineMin-color");
const hourHandColor = document.getElementById("hourHand-color");
const minutesHandColor = document.getElementById("minHand-color");
const secondHandColor = document.getElementById("secondHand-color");

function clock() {
  const now = new Date();
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
  ctx.fillStyle = faceColor.value;
  ctx.strokeStyle = borderColor.value;
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // draw hour lines
  ctx.save();
  ctx.beginPath();
  for (let i = 0; i < 12; i++) {
    ctx.strokeStyle = hourLineColor.value;
    ctx.rotate(Math.PI / 6);
    ctx.lineWidth = 6;
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Draw minutes hands
  ctx.save();
  ctx.lineWidth = 3;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.strokeStyle = minuteLineColor.value;
      ctx.beginPath();
      ctx.moveTo(110, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  const hr = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  // Draw hour hand
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
  );
  ctx.strokeStyle = hourHandColor.value;
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // Draw min hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.strokeStyle = minutesHandColor.value;
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  // Draw sec hand
  ctx.save();
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = secondHandColor.value;
  ctx.fillStyle = secondHandColor.value;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(100, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.restore();
  requestAnimationFrame(clock);
}
requestAnimationFrame(clock);

const btnSave = document.getElementById("save-btn");

btnSave.addEventListener("click", () => {
  const dataURL = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.download = "clock.png";
  link.href = dataURL;
  link.click();
});

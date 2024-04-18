const play = document.getElementById("play");
const stop = document.getElementById("stop");
const pause = document.getElementById("pause");
const video = document.querySelector("video");
const curTime = document.getElementById("time-Stamp");
const progress = document.getElementById("progress");

play.addEventListener("click", () => {
  video.play();
});

pause.addEventListener("click", () => {
  video.pause();
});

stop.addEventListener("click", () => {
  video.pause();
  video.currentTime = 0;
});

function updateTime() {
  progress.setAttribute(`max`, video.duration);
  progress.value = video.currentTime;

  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }

  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }

  curTime.innerText = `${minutes}:${seconds}`;
}

video.addEventListener("timeupdate", updateTime);

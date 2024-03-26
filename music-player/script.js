const musicContainer = document.getElementById("music-container");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const imageCover = document.getElementById("cover");
const icon = play.querySelector("i.fas").classList;

const songs = ["hey", "summer", "ukulele"];
let songIndex = 0;

const songIndexToPlay = function (songIndex) {
  audio.src = `music/${songs[songIndex]}.mp3`;
  imageCover.src = `images/${songs[songIndex]}.jpg`;
  songPlay();
};

// Play music
function songPlay() {
  musicContainer.classList.add("play");
  audio.play();
  icon.remove("fa-play");
  icon.add("fa-pause");
}

// pause music
function songPause() {
  musicContainer.classList.remove("play");
  audio.pause();
  icon.add("fa-play");
  icon.remove("fa-pause");
}

// check for music Play And Pause
function playMusic() {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    songPause();
  } else {
    songPlay();
  }
}

// play Next song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  songIndexToPlay(songIndex);
}

// play Previous song
function previousSong() {
  songIndex--;
  if (songIndex <= -1) {
    songIndex = songs.length - 1;
  }
  songIndexToPlay(songIndex);
}

play.addEventListener("click", playMusic);
next.addEventListener("click", nextSong);
prev.addEventListener("click", previousSong);

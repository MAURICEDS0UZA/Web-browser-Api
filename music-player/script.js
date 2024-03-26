const musicContainer = document.getElementById("music-container");
const play = document.getElementById("play");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const imageCover = document.getElementById("cover");
const icon = play.querySelector("i.fas").classList;

const songs = ["hey", "summer", "ukulele"];
let songIndex = 0;

const songIndexToPlay = function (song) {
  console.log(song);
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  imageCover.src = `images/${song}.jpg`;
  songPlay();
};
songIndexToPlay(songs[songIndex]);

// Play music
function songPlay() {
  musicContainer.classList.add("play");
  audio.play().catch((error) => {
    // Log the error if there's any
    console.error("Failed to play audio:", error);
  });
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
  songIndexToPlay(songs[songIndex]);
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

new WOW().init();
const video = document.getElementById("video");
const playPauseBtn = document.getElementById("playPauseBtn");

playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.classList.remove("play");
    playPauseBtn.classList.add("pause");
  } else {
    video.pause();
    playPauseBtn.classList.remove("pause");
    playPauseBtn.classList.add("play");
  }
});

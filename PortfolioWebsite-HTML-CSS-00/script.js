const audio = new Audio("./audios/name-audio.mp3");
const audioImage = document.querySelector(".name img");

let playAudio = () => {
  audio.play();
};

audioImage.addEventListener("click", () => {
  audioImage.style.opacity = "0.6";
  audioImage.style.cursor = "progress";
  playAudio();

  setTimeout(() => {
    audioImage.style.opacity = "1";
    audioImage.style.cursor = "pointer";
  }, 1000);
});

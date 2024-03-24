const audio = new Audio("./audios/name-audio.mp3");

let playAudio = () => {
  audio.play();
};

document.querySelector(".name img").addEventListener("click", () => {
  const image = document.querySelector(".name img");
  image.style.opacity = "0.6";
  image.style.cursor = "progress";
  playAudio();

  setTimeout(() => {
    image.style.opacity = "1";
    image.style.cursor = "pointer";
  }, 1000);
});

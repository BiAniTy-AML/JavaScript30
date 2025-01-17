function play_sound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if (!audio) return;

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    audio.currentTime = 0;
    audio.play();
    key.classList.toggle("playing");
}

window.addEventListener("keydown", play_sound);

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

const divs = document.querySelectorAll("div");

function log_text(e) {
    console.log(this.classList.value);
    //e.stopPropagation();
}

divs.forEach((div) =>
    div.addEventListener("click", log_text, {
        capture: false,
        once: true,
    })
);

function buttonaudio() {
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const audio = document.getElementById('myAudio');
            audio.currentTime = 0;
            audio.play();

            setTimeout(() => {
                if (this.target === "_blank") {
                    window.open(this.href, "_blank");
                } else {
                    window.location.href = this.href;
                }
            }, 400);
        });
    });
}

function scrolldown(button, next) {
    document.getElementById(button).addEventListener('click', () => {
        document.getElementById(next).scrollIntoView({ behavior: 'smooth' });
    });
}

function showhidden() {
    const button = document.getElementById("show-hidden-btn");

    button.addEventListener("click", () => {
        document.querySelectorAll(".hidden").forEach(div => {
            div.classList.remove("hidden");
        });

        button.style.display = "none";
    });
}

function carousel() {
    const items = document.querySelector(".carousel-inside")
    items.innerHTML += items.innerHTML
}

buttonaudio()

if (document.getElementById("scrollDownBtn")) {
    scrolldown('scrollDownBtn', 'next-section')
}
if (document.getElementById("scrollDownBtn2")) {
    scrolldown('scrollDownBtn2', 'next-section2')
}
if (document.getElementById("show-hidden-btn")) {
    showhidden()
}
if (document.getElementById("carousel")) {
    carousel()
}

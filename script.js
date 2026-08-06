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

document.getElementById('reset-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const Confirm = confirm("Reset the form? All data will be lost.");
    if (!Confirm) {return};
    document.querySelector('form').reset();
});

document.getElementById('submit-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const form = document.querySelector('form');
    if (!form.reportValidity()) return;

    const Confirm = confirm("Submit the form? You will not be able to edit it after submission.");
    if (!Confirm) return;

    form.requestSubmit();
});

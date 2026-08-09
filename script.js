function buttonAudio() {
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

function scrollDown(button, next) {
    document.getElementById(button).addEventListener('click', () => {
        document.getElementById(next).scrollIntoView({ behavior: 'smooth' });
    });
}

function showHidden() {
    const button = document.getElementById("show-hidden-btn");

    button.addEventListener("click", () => {
        document.querySelectorAll(".hidden").forEach(div => {
            div.classList.remove("hidden");
        });

        button.style.display = "none";
    });
}

function showHiddenestiaryCard() {
    const buttonBestiary = document.getElementById("show-hidden-bestiary");

    buttonBestiary.addEventListener("click", () => {
        document.querySelectorAll(".hidden-bestiary").forEach(div => {
            div.classList.remove("hidden-bestiary");
        });

        buttonBestiary.style.display = "none";
    });
}

function carousel() {
    const items = document.querySelector(".carousel-inside")
    items.innerHTML += items.innerHTML
}

function form() {
    document.getElementById('reset-btn').addEventListener('click', e => {
        e.preventDefault();

        const Confirm = confirm("Reset the form? All data will be lost.");
        if (!Confirm) {return};
        document.querySelector('form').reset();
    });

    document.getElementById('submit-btn').addEventListener('click', e => {
        e.preventDefault();

        const form = document.querySelector('form');
        if (!form.reportValidity()) return;

        const Confirm = confirm("Submit the form? You will not be able to edit it after submission.");
        if (!Confirm) return;

        form.requestSubmit();
    });
}

buttonAudio()

if (document.getElementById("scrollDownBtn")) {
    scrollDown('scrollDownBtn', 'next-section')
}
if (document.getElementById("scrollDownBtn2")) {
    scrollDown('scrollDownBtn2', 'next-section2')
}
if (document.getElementById("scrollDownBtn3")) {
    scrollDown('scrollDownBtn3', 'next-section3')
}
if (document.getElementById("show-hidden-btn")) {
    showHidden()
}
if (document.getElementById("carousel")) {
    carousel()
}
if (document.getElementById("show-hidden-bestiary")) {
    showHiddenestiaryCard()
}
if (document.getElementById('reset-btn') && document.getElementById('submit-btn')) {
    form()
}

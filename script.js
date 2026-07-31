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

document.getElementById('scrollDownBtn').addEventListener('click', () => {
    document.getElementById('next-section').scrollIntoView({ behavior: 'smooth' });
});
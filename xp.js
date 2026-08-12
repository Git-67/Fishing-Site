const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    document.querySelectorAll('.xp-img').forEach(img => {
        img.addEventListener('click', function () {
            lightboxImage.src = this.src;
            lightboxImage.alt = this.alt;

            lightbox.classList.add('show');

            // Prevent the background page from scrolling
            document.body.style.overflow = 'hidden';
        });
    });

    lightbox.addEventListener('click', function () {
        lightbox.classList.remove('show');
        lightboxImage.src = '';

        document.body.style.overflow = '';
    });

    lightboxImage.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && lightbox.classList.contains('show')) {
            lightbox.classList.remove('show');
            lightboxImage.src = '';

            document.body.style.overflow = '';
        }
    });
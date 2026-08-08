const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    // Find all fish images
    document.querySelectorAll('.fish-card-img').forEach(img => {
        img.addEventListener('click', function () {
            lightboxImage.src = this.src;
            lightboxImage.alt = this.alt;

            lightbox.classList.add('show');

            // Prevent the background page from scrolling
            document.body.style.overflow = 'hidden';
        });
    });

    // Close when clicking the blank area
    lightbox.addEventListener('click', function () {
        lightbox.classList.remove('show');
        lightboxImage.src = '';

        document.body.style.overflow = '';
    });

    // Don't close when clicking the image itself
    lightboxImage.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Close with Escape
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && lightbox.classList.contains('show')) {
            lightbox.classList.remove('show');
            lightboxImage.src = '';

            document.body.style.overflow = '';
        }
    });
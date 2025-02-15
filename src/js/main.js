const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
let currentIndex = 0;
let images = [];

document.querySelectorAll('.gallery__image').forEach((img, index) => {
    images.push(img.dataset.source);
    img.addEventListener('click', (event) => {
        event.preventDefault();
        currentIndex = index;
        openLightbox(images[currentIndex]);
    });
});

function openLightbox(src) {
    lightboxImage.src = src;
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('active')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowRight') navigate(1);
    if (event.key === 'ArrowLeft') navigate(-1);
});

function navigate(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    openLightbox(images[currentIndex]);
}
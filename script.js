document.addEventListener('DOMContentLoaded', function () {
    // Initialize Bootstrap Carousels
    new bootstrap.Carousel(document.getElementById('materialCarousel'), {
        ride: false,
        interval: false,
        wrap: true
    });

    new bootstrap.Carousel(document.getElementById('digitalCarousel'), {
        ride: false,
        interval: false,
        wrap: true
    });
});
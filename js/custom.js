window.addEventListener("DOMContentLoaded", function () {
    lucide.createIcons();

    const mainSlide = new Swiper(".main_visual_slide", {
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});
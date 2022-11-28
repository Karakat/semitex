(() => {
    const questionsItems = document.querySelectorAll(".questions__item");

    questionsItems.forEach(item => item.addEventListener("click", e => {
        e.preventDefault();
        questionsItems.forEach(item => item.classList.remove("open"));
        let target = e.currentTarget;
        target.classList.toggle("open");
    }))


    const swiper = new Swiper('.swiper', {
        // Optional parameters
        effect: 'slide',
        centeredSlides: true,
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 18
            },
            1550: {
                slidesPerView: 5,
                spaceBetween: 18
            }
        }
    });
})()
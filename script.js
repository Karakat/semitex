(() => {
    const questionsItems = document.querySelectorAll(".questions__item");
    const schemeCards = document.querySelectorAll(".scheme__card");
    const schemeClasses = ["schemeone", "schemetwo", "schemethree", "schemesix", "schemefive", "schemefour"];
    const backcallButtons = document.querySelectorAll(".backcall__btn");
    const popup = document.querySelector(".modular");

    questionsItems.forEach(item => item.addEventListener("click", e => {
        e.preventDefault();
        questionsItems.forEach(item => item.classList.remove("open"));
        let target = e.currentTarget;
        target.classList.toggle("open");
    }))

    function resizeSchemes() {
        let mediaMatchLess = window.matchMedia("(max-width: 1400px)");
        let mediaMatchMore = window.matchMedia("(min-width: 1400px)");
        if (mediaMatchLess.matches) {
            schemeCards.forEach(item => {
                item.classList.remove(...schemeClasses)
            })
        };
        if (mediaMatchMore.matches) {
            for (let i = 0; i < schemeCards.length; i++) {
                schemeCards[i].classList.add(schemeClasses[i])
            }
        }
    }

    function closePopup(e) {
        let field = e.target;
        if (field.className === "modular") popup.style.visibility = "hidden";
    };

    window.addEventListener("resize", resizeSchemes);
    window.addEventListener("DOMContentLoaded", resizeSchemes);
    backcallButtons.forEach(item => {
        item.addEventListener("click", () => {
            popup.style.visibility = "visible";
        })
    })
    popup.addEventListener("click", closePopup)

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        effect: 'slide',
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            550: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 18
            },
            1550: {
                slidesPerView: 5,
                spaceBetween: 18
            }
        }
    });
})()
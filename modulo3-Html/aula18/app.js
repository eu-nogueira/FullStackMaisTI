
document.addEventListener('DOMContentLoaded', function () {

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        pagination: {
            el: '.swiper-pagination'
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });


    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {

            swiper.slidePrev();
        } else if (event.key === 'ArrowRight') {

            swiper.slideNext();
        }
    });
});


const mobileMenu = document.querySelector('.mobile-menu');
const sidebar = document.querySelector('.sidebar');


mobileMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

const buyButtons = document.querySelectorAll(".square-button");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const closeModalButton = document.querySelector("#close-modal");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

buyButtons.forEach((button) => {
    button.addEventListener("click", () => toggleModal());
});
closeModalButton.addEventListener("click", () => toggleModal());
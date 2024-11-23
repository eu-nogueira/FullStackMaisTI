
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

let modal = document.querySelector('.modal')
let modal2 = document.querySelector('.modal2')
let modal3 = document.querySelector('.modal3')
let newModal = document.querySelector('.showModal')
let newModal2 = document.querySelector('.showModal2')
let newModal3 = document.querySelector('.showModal3')
let banner = document.querySelector('.banner')

modal.addEventListener('click', function () {
    newModal.showModal()
    banner.style.opacity = '0.3'
})

modal2.addEventListener('click', function () {
    newModal2.showModal()
    banner.style.opacity = '0.3'
})

modal3.addEventListener('click', function () {
    newModal3.showModal()
    banner.style.opacity = '0.3'
})

function closeModal() {
    newModal.close()
    newModal2.close()
    newModal3.close()
    banner.style.opacity = '1'
}

// Video

// $(window).on('load', function(){

//     $('#vid1').vide('./navbar_vid/wedding_by_the_beach', {
//         bgcolor: '#52827f'
//     })
// });
// $(window).on('load', function(){

//     $('#vid2').vide('./navbar_vid/i_love_you', {
//         bgcolor: '#52827f'
//     })
// });
// $(window).on('load', function(){

//     $('#vid3').vide('./navbar_vid/coverr_women', {
//         bgcolor: '#52827f'
//     })
// });
// $(window).on('load', function(){
 
//     $('#vid4').vide('./navbar_vid/coverr_money', {
//         bgcolor: '#52827f'
//     })
// });

// Swiper

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     effect: 'fade',
//     fadeEffect: {
//         crossFade: true
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//       renderBullet: function (index, className) {
//         return '<div class="' + className +'">' + (index + 1) + '</div>';
//       },
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i)
        });
    });


const tabs = document.querySelectorAll('.content-item');
const content = document.querySelectorAll('.content-box');

const changeClass = el => {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.forEach(item => {
    item.addEventListener('click', e => {
        const currTab = e.currentTarget.dataset.btn;
        console.log(e.target)

        changeClass(e.currentTarget)
        for (i = 0; i < content.length; i++) {
            content[i].classList.remove('active');
            if (content[i].dataset.content === currTab) {
                content[i].classList.add('active')
            }
        }
    })
})

let tabOne = document.querySelector('.content-item').click();

const buttons = document.querySelectorAll('.works__tab');
const contentBtn = document.querySelectorAll('.works__content-box');

const changeBtn = elem => {
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active')
    }
    elem.classList.add('active');
}

buttons.forEach(item => {
    item.addEventListener('click', e => {
        const currentTab = e.target.dataset.id;
        changeBtn(e.target)
        for (i = 0; i < contentBtn.length; i++) {
            contentBtn[i].classList.remove('active');
            if (contentBtn[i].dataset.box === currentTab) {
                contentBtn[i].classList.add('active')
            }
        }
    })
});

document.querySelector('.works__tab').click();
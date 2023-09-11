
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
        })
    })
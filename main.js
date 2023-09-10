$(window).on('load', function(){
 
    // Vide.js - video background
    $('#vid1').vide('./navbar_vid/wedding_by_the_beach', {
        bgcolor: '#52827f'
    })
});
$(window).on('load', function(){
 
    // Vide.js - video background
    $('#vid2').vide('./navbar_vid/i_love_you', {
        bgcolor: '#52827f'
    })
});
$(window).on('load', function(){
 
    // Vide.js - video background
    $('#vid3').vide('./navbar_vid/coverr_women', {
        bgcolor: '#52827f'
    })
});
$(window).on('load', function(){
 
    // Vide.js - video background
    $('#vid4').vide('./navbar_vid/coverr_money', {
        bgcolor: '#52827f'
    })
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
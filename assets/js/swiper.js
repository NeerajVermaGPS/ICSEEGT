/* 
Author: Neeraj Verma
LinkedIn: https://www.linkedin.com/in/neerajvermagps/ 
Library Used: swiper.js
Updated on: 28-06-2025
*/

const swiper = new Swiper(".mySwiper", {
  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".mySwiper2", {
  loop: true,

  effect: "fade",

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: false,
  navigation: false,
});

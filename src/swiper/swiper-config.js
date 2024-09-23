var swiper = new Swiper(".main-swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".main-next",
    prevEl: ".main-prev",
  },
});

var swiper = new Swiper(".upcoming-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".upcoming-next",
    prevEl: ".upcoming-prev",
  },
});

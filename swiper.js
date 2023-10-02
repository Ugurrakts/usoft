// Swiper JS SLİDERI JAASCRİPT KODU //
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 600 PX'DEN BÜYÜK EKRANLAR İÇİN GÖSTERİM SAYISI //

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
  },
});

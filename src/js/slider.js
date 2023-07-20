// import Swiper from 'swiper/bundle';

const reviewSwiper = new Swiper('.review-swiper', {
  // loop: true,

  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },

  // If we need pagination
  pagination: {
    el: '.review-swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const productsSwiper = new Swiper('.products-swiper', {
  spaceBetween: 18,
  // loop: true,

  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },

  // If we need pagination
  pagination: {
    el: '.review-swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2.5,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
    },
  },
});

const buyNowSwiper = new Swiper('.buy-now-swiper', {
  // spaceBetween: 160,
  // loop: true,

  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },

  // If we need pagination
  pagination: {
    el: '.review-swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
    },
  },
});

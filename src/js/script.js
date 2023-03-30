$(document).ready(function () {
  $('.swiper-wrapperr').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    // centerMode: true,
    // clickable: true,
    // dynamicBullets: true,

    responsive: {
      breakpoint: 1199,
      setting: {
        slidesToShow: 2,
        slidesToScroll: 2,
        // infinite: true,
        // dots: true,u
      },
      breakpoint: 768,
      setting: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // infinite: true,
      },
      //   breakpoint: 480,
      //   setting: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
    },
    mobileFirst: false,
  });
  //   appenDots: $('.content ');
});

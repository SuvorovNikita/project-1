import $ from 'jquery';

import * as slick from 'slick-carousel';

$('.c-featured__slider').slick({
  arrows: false,
  dots: true,
  adaptiveHeight: true,
  slidesToShow: 4,
  slidesToScroll: 3,

  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

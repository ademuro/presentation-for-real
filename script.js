$(function () {
  'use strict';
  var currSlide = 0;
  var allSlides = $('section');

  $(document).on('keydown', function (event) {
    var nextSlide;

    if (event.keyCode === 37) { // clicked left arrow
      nextSlide = currSlide ? currSlide - 1 : currSlide;
    } else if (event.keyCode === 39) { // clicked right arrow
      console.log('next slide');
      nextSlide = currSlide < allSlides.length - 1 ? currSlide + 1 : currSlide;
    }
    if (nextSlide !== currSlide) {
      $(allSlides[currSlide])
        .removeClass('active')
        .addClass('inactive');
      $(allSlides[nextSlide])
        .removeClass('inactive')
        .addClass('active');
      currSlide = nextSlide;
    }
    event.preventDefault();
  });
});


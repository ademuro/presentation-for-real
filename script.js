$(function () {
  'use strict';
  var currSlide = 1;
  var allSlides = $('section');

  $(document).on('keydown', function (event) {
    var nextSlide;

    if (event.keyCode === 37 && currSlide) {
      console.log('prev slide');
      $(allSlides[currSlide - 1])
        .removeClass('prev')
        .addClass('active');
      $(allSlides[currSlide + 1])
        .removeClass('next')
        .addClass('inactive');
      $(allSlides[currSlide])
        .removeClass('active')
        .addClass('next');
      $(allSlides[currSlide - 2])
        .removeClass('inactive')
        .addClass('prev');
      currSlide -= 1;
    } else if (event.keyCode === 39 && currSlide < allSlides.length - 1) {
      console.log('next slide');
      $(allSlides[currSlide - 1])
        .removeClass('prev')
        .addClass('inactive');
      $(allSlides[currSlide + 1])
        .removeClass('next')
        .addClass('active');
      $(allSlides[currSlide])
        .removeClass('active')
        .addClass('prev');
      $(allSlides[currSlide + 2])
        .removeClass('inactive')
        .addClass('next');
      currSlide += 1;
    }
    event.preventDefault();
  });
});

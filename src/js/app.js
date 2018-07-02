// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.


( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
    $('.full-width-slider').owlCarousel({
      items: 1,
      nav: true,
      dots: false,
      loop: true,
      autoplay: true
    });
  });

})(jQuery);
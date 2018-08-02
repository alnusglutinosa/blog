import 'gsap';
import './lib/gsap.js';
import sayHello from './lib/sayHello.js';
import show_menu from './lib/show_menu.js';
import './lib/appear_lib.js';
import appear from './lib/appear.js';
import 'slick-carousel';
import 'magnific-popup';

sayHello();

// animation on load
$(window).on('load', function() {

  // начать повторы preloader
  var timerId = setInterval(function() {
    $('.preloader').toggleClass('is-blog');
  }, 1200);

  setTimeout(function() {
    $('.preloader').fadeOut(500), setTimeout(function() {
      $('body').addClass('is-load');

      // остановить повторы preloader
      clearInterval(timerId);
    }, 500);

    // Плавное появление текста
    if (window.matchMedia('(min-width: 960px)').matches) {
      appear();
    }

    $('.main-title').addClass('js-loaded');
  }, 8000);

  // $('.main-title').addClass('js-loaded');
  show_menu();
});


$(window).resize(function() {
  show_menu();
});


$(document).ready(function() {

  // slick
  $('.js-hero').slick({
    nextArrow: '.slider__next',
    prevArrow: '.slider__prev'
  });

  $('.thumbs__list').slick({
    draggable: false,
    infinite: false,
    arrows: true,
    rows: 2,
    slidesPerRow: 4,
    nextArrow: '.thumbs__btn--next',
    prevArrow: '.thumbs__btn--prev'
  });


  // magnificPopup
  $('.js-popup').magnificPopup({
    type: 'image',
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',

    image: {
      verticalFit: true
    },

    gallery: {
      enabled: true
    }
  });


  $('.nav-trigger').on('click', function(e) {
    $('.main-nav').show();

    $(this).toggleClass('is-active');
    $('.main-nav').toggleClass('is-open');

    if ( ! $('.main-nav').hasClass('is-open') ) {
      setTimeout(function() {
        $('.main-nav').hide();
      }, 1200);
    } else {
      setTimeout(function() {
        $('.main-nav').show();
      },1400);
    }
  });

});

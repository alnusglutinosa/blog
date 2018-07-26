import sayHello from './lib/sayHello.js';
import 'slick-carousel';

sayHello();

$('.js-hero').slick({
  nextArrow: '.slider__next',
  prevArrow: '.slider__prev'
});

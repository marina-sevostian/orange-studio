import './js/header';
import './js/hero';
import './js/about-me';
import './js/benefits';
import './js/projects';
import './js/faq';
import './js/covers';
import './js/reviews';
import './js/work-together';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const scrollToTopButton = document.querySelector('#scrollToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'flex';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

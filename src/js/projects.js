import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';


document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-projects', {
  watchOverflow: false,
  loop: false,
  direction: 'horizontal',
  simulateTouch: true,
  grabCursor: true,
  slidesPerView: 1,
  speed: 1000,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  });
});

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';


const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
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
    nextEl: '.right-swipe',
    prevEl: '.left-swipe',
  },
});

swiper.on('slideChange', () => {
  const prevButton = document.querySelector('.left-swipe');
  const nextButton = document.querySelector('.right-swipe');

  if (swiper.isBeginning) {
    prevButton.disabled = true;
    prevButton.classList.add('disabled');
  } else {
    prevButton.disabled = false;
    prevButton.classList.remove('disabled');
  }

  if (swiper.isEnd) {
    nextButton.disabled = true;
    nextButton.classList.add('disabled');
  } else {
    nextButton.disabled = false;
    nextButton.classList.remove('disabled');
  }
});

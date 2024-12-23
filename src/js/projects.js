import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';


document.addEventListener('DOMContentLoaded', () => {

  const prevButton = document.querySelector('.button-prev');
  const nextButton = document.querySelector('.button-next');

  let swiper

  function updateButtonsState() {
      
    if (!swiper) return;

    if (swiper.isBeginning) {
      prevButton.setAttribute('disabled', 'true');
    } else {
      prevButton.removeAttribute('disabled');
    }

    if (swiper.isEnd) {
      nextButton.setAttribute('disabled', 'true');
    } else {
      nextButton.removeAttribute('disabled');
    }
  }

  swiper = new Swiper('.swiper-projects', {
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
    on: {
      slideChange: updateButtonsState,
      init: updateButtonsState,
    },
  });
});




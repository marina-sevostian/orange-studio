document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item, index) => {
    const trigger = item.querySelector('.accordion-trigger');
    const icon = item.querySelector('.accordion-icon');

    // const svg = icon.querySelector('svg');

    if (index === 0) {
      item.classList.add('open');
      icon.classList.add('active');

      // svg.classList.add('active');
    }

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // закриваю (видаляю актив і опен)
      accordionItems.forEach(i => {
        i.classList.remove('open');
        const iconToReset = i.querySelector('.accordion-icon');
        const svgToReset = i.querySelector('.accordion-icon svg');
        if (iconToReset) {
          iconToReset.classList.remove('active');
        }
        // if (svgToReset) {
        //   svgToReset.classList.remove('active');
        // }
      });

      // відкриваб
      if (!isOpen) {
        item.classList.add('open');
        icon.classList.add('active');

        // svg.classList.add('active');
      }
    });
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-about', {
    // Конфігурація слайдера
    slidesPerView: 2, // Кількість видимих слайдів
    modules: [Navigation, Pagination],
    navigation: {
      // nextEl: '.swiper-button-next',
      nextEl: '.swiper-button-next-2',
    },
    loop: true,
    watchOverflow: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true, // Включити керування з клавіатури
      onlyInViewport: true,
    },
    mousewheel: true,

    loopFillGroupWithBlank: true,
    breakpoints: {
      // коли ширина >= 640px
      640: {
        slidesPerView: 2,
      },
      // коли ширина >= 768px
      768: {
        slidesPerView: 3,
      },
      // коли ширина >= 1024px
      1440: {
        slidesPerView: 6,
      },
    },
  });
});

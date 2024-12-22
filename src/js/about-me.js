
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




////////////////////////////////////////////////////////////////////
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

// document.addEventListener('DOMContentLoaded', () => {
//   const swiper = new Swiper('.swiper-container', {
//     // Конфігурація слайдера
//     slidesPerView: 3, // Кількість видимих слайдів
//     spaceBetween: 20, // Відстань між слайдами
//     loop: true, // Циклічний режим
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },

// slidesPerView: 1,
// loop: true, // Безкінечний цикл,
// navigation: {
//   nextEl: '.swiper-button-next',
// },
// keyboard: {
//   enabled: true,
//   onlyInViewport: true,
// },
// grabCursor: true, // Для зручності на сенсорних пристроях
//   });
// });
// document.addEventListener('DOMContentLoaded', () => {
//   const swiper = new Swiper('.swiper-about', {
//     direction: 'horizontal',
//     loop: true, // Безкінечний цикл
//     spaceBetween: 20, // Відступи між слайдами
//     slidesPerView: 'auto', // Автоматична ширина
//     centeredSlides: true, // Центрування слайдів
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     keyboard: {
//       enabled: true,
//       onlyInViewport: true,
//     },
//     grabCursor: true, // Для зручності на сенсорних пристроях
//   });
//   console.log(swiper());
// });






import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';




document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item, index) => {
    const trigger = item.querySelector('.accordion-trigger');

    if (index === 0) {
      item.classList.add('open');
    }

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      accordionItems.forEach((i) => i.classList.remove('open'));

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
});

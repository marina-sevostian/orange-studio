import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.faq-list', {
  duration: 500,
  showMultiple: false,
});

const faqButtons = document.querySelectorAll('.faq-button');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const parentItem = button.closest('.faq-item');
    const answer = parentItem.querySelector('.faq-answer');
    const isActive = button.classList.contains('active');

    document.querySelectorAll('.faq-answer').forEach(ans => {
      ans.style.maxHeight = null;
      ans.style.opacity = '0';
      ans.style.transition = 'opacity 0.3s ease, max-height 0.5s ease';
    });

    document.querySelectorAll('.faq-button').forEach(btn => {
      btn.classList.remove('active');
    });

    if (!isActive) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.opacity = '1';
      answer.style.transition = 'opacity 0.5s ease, max-height 0.5s ease';
      button.classList.add('active');
    }
  });
});

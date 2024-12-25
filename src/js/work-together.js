import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('.footer-js-submit-form');
const invalidEmail = document.querySelector('.check-inv');
const validEmail = document.querySelector('.check-succ');
const modal = document.querySelector('[data-modal]');
const title = document.querySelector('.response-title');
const text = document.querySelector('.response-message');
const closeButton = document.querySelector('[data-modal-close]');
const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';

form.addEventListener('submit', handleSubmit);

async function servicePost(url, option) {
  const response = await axios(url, option);
  return response.data;
}
async function handleSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value.trim();
  const comment = event.target.elements.comment.value.trim();

  if (!email) {
    invalidEmail.classList.remove('visually-hidden');
    form[0].style.borderBottom = '2px solid  #E74A3B';
    return;
  } else if (!comment) {
    iziToast.show({
      message: 'Please, fill the comments field.',
      backgroundColor: '#EF4040',
      messageColor: '#FAFAFB',
      position: 'topRight',
      progressBarColor: '#FFBEBE',
    });
    return;
  } else {
    invalidEmail.classList.add('visually-hidden');
    validEmail.classList.remove('visually-hidden');
    form[0].style.borderBottom = '2px solid  #3CBC81';
  }

  try {
    const dataUpdated = await servicePost(BASE_URL, {
      method: 'POST',
      data: {
        email: `${email}`,
        comment: `${comment}`,
      },
    });
    invalidEmail.classList.add('visually-hidden');
    title.textContent = `${dataUpdated.title}`;
    text.textContent = `${dataUpdated.message}`;

    modal.classList.add('is-open');
  } catch (error) {
    iziToast.show({
      message: error.message,
      backgroundColor: '#EF4040',
      messageColor: '#FAFAFB',
      position: 'topRight',
      progressBarColor: '#FFBEBE',
    });

    title.textContent = 'Submission Failed';
    text.textContent =
      'There was an issue submitting your form. Please try again later.';
  } finally {
    form.reset();
    form[0].style.borderBottom = '2px solid  #ccc';
    validEmail.classList.add('visually-hidden');
  }
}

function handleClick(event) {
  if (
    event.target.classList.contains('svg-close') ||
    event.target.classList.contains('svg-use') ||
    (event.currentTarget === modal && event.target === modal)
  ) {
    modal.classList.remove('is-open');
  }
}

modal.addEventListener('click', handleClick);

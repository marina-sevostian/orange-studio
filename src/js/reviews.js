import axios from 'axios';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';
const reviewsList = document.querySelector('.reviews-list');

async function fetchReviews(url) {
  const response = await axios.get(url);
  return response.data;
}

// ul

function createMarkup(arr) {
  return arr
    .map(
      ({ _id, avatar_url, author, review }) => `
    <li data-id="${_id}" class="reviews-item swiper-slide">
      <img class="avatar-image" 
        src="${avatar_url}" 
        alt="${author}" 
        width="48" 
      />
      <h3 class="reviews-subtitle">${author}</h3>
      <p class="reviews-text">${review}</p>
    </li>
  `
    )
    .join('');
}

// Swiper

const prevButton = document.querySelector('.swiper-button-prev-rev');
const nextButton = document.querySelector('.swiper-button-next-rev');
let swiper;

function updateButtons() {
      
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

  swiper = new Swiper('.swiper', {
  loop: false,
  direction: 'horizontal',
  simulateTouch: true,
  grabCursor: true,
  spaceBetween: 16,
  slidesPerView: 1, // 375px
  speed: 1000,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-rev',
    prevEl: '.swiper-button-prev-rev',
  },
  on: {
    slideChange: updateButtons,
    init: updateButtons,
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1440: { slidesPerView: 4 },
  },
});

//list

fetchReviews(BASE_URL)
  .then(data => {
    reviewsList.insertAdjacentHTML('beforeend', createMarkup(data));
    swiper.update();
  })
  .catch(error => {
    iziToast.error({
      title: 'Error',
      message: 'Not found',
      position: 'bottomRight',
    });
    console.error(error.message);
  });


import axios from "axios";
//import Swiper from 'swiper';
import 'swiper/css/navigation';
 import 'swiper/css/pagination';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
 //import 'swiper/css';
 import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';
const reviewsList = document.querySelector(".reviews-list");


async function fetchReviews(url) {
  const response = await axios.get(url);
  return response.data;
}

// ul

function createMarkup(arr) {
  return arr.map(({ _id, avatar_url, author, review }) => `
    <li data-id="${_id}" class="reviews-item swiper-slide">
      <img class="avatar-image" 
        src="${avatar_url}" 
        alt="${author}" 
        width="48" 
      />
      <h3 class="reviews-subtitle">${author}</h3>
      <p class="reviews-text">${review}</p>
    </li>
  `).join("");
}

// Swiper

const swiper = new Swiper('.swiper', {
  loop: false,
  direction: 'horizontal',
  simulateTouch: true,
  grabCursor: true,
  spaceBetween: 16,
  slidesPerView: 1, // 375px
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1440: { slidesPerView: 4 },
  },
});

//list

fetchReviews(BASE_URL)
  .then(data => {
    reviewsList.insertAdjacentHTML("beforeend", createMarkup(data));
    swiper.update(); 
  })
  .catch(error => {
    iziToast.error({
      title: 'Error',
      message: 'Not found',
      position: 'bottomRight',
    });
    console.error(error.message);
    }
  );

//  button

swiper.on('slideChange', () => {
  const prevButton = document.querySelector('.swiper-button-prev');
  const nextButton = document.querySelector('.swiper-button-next');

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






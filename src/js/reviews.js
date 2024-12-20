import Swiper from 'swiper';
import 'swiper/css';

// init Swiper:

// const swiper = new Swiper('.wrapper', {
//   loop: true,
//   direction: 'horizontal',
//   slidesPerView:4,
// 	// grabCursor: true,
// 	spaceBetween: 16,

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//  breakpoints: {
// 	0: {
// 		slidesPerView: 1
// 	},
// 	768: {
// 		slidesPerView: 2
// 	},
// 	// 1024: {
// 	// 	slidesPerView: 2
// 	// },

// 	// 1200: {
// 	// 	slidesPerView: 2
// 	// },

// 	1440: {
// 		slidesPerView: 4
// 	}
//  }
// }

 const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews'

 const reviewsList = document.querySelector(".reviews-list")

 async function fetchReviews(url = BASE_URL, options = {}) {
  const response = await fetch(url, options);
   if (!response.ok) {
     throw new Error(response.statusText);
   }
   return await response.json();
}
fetchReviews(url = BASE_URL)
  .then(data => 
    reviewsList.insertAdjacentHTML('beforeend', createMarkup))
  .catch(error => console.log(error))
//   .finally(() => console.log("finally"))

function createMarkup(arr) {
  return arr.map(({_id, avatar_URL, name, author, review}) =>`
    <ul class="reviews-list swiper-wrapper">
      <li data-id="${_id}" class="reviews-item swiper-slide">
        <img class="avatar-image"
          src="${avatar_URL}"
          alt="${name}"
          width="48"
        />
        <h3 class="reviews-subtitle">${author}</h3>
        <p class="reviews-text">${review}</p>
      </li>
    </ul> ` 
    ).join("");
}


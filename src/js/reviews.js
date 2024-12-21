import axios from "axios";
import Swiper from 'swiper';
import 'swiper/css';


const swiper = new Swiper('.wrapper', {
  loop: true,
  direction: 'horizontal',
  grabCursor: true,
	spaceBetween: 16,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 breakpoints: {
	0: {
		slidesPerView: 1
	},
	768: {
		slidesPerView: 2
	},
	// 1024: {
	// 	slidesPerView: 2
	// },

	// 1200: {
	// 	slidesPerView: 2
	// },

	1440: {
		slidesPerView: 4
	}
 }
})

 const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews'

 const reviewsList = document.querySelector(".reviews-list")

 reviewsList.addEventListener("click", handleUpdate);
 reviewsList.addEventListener("click", handleDelete);

async function fetchReviews(url = BASE_URL, options = {}) {
  const response = await axios(url, options);
  return response.data;
}

function createMarkup(arr) {
  return arr.map(({_id, avatar_url, author, review}) =>`
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
    ).join("");
}


fetchReviews(BASE_URL)
    .then(data => reviewsList.insertAdjacentHTML("beforeend", createMarkup(data)))
    .catch(error => alert(error.message))

async function handleUpdate(event) {
  event.preventDefault();
   
      const parent = event.target.closest(".reviews-item");
      const id = parent.dataset.id;
      
      try {
          const data = await fetchReviews(`${BASE_URL}/${id}`, {
              method: "GET",
              data: {
                  completed: event.target.checked
              }
          });
  
          event.target.checked = data.completed
      } catch(error) {
          alert(error.message);
      }
  }
  async function handleDelete(event) {
    if(!event.target.classList.contains(".swiper-button-next")) {
        return;
    }

    const parent = event.target.closest(".reviews-item");
    const id = parent.dataset.id;

    try {
        await fetchReviews(`${BASE_URL}/${id}`, {
            method: "DELETE"
        })

        parent.remove();
    } catch(error) {
        console.log(error.message);
    }
}

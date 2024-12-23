const marqueeLine = document.querySelectorAll('.marquee__line');
const targetSection = document.querySelector('#covers');

marqueeLine.forEach(e => e.classList.add('paused'));

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.25,
};

const observer = new IntersectionObserver(pausedAnimation, options);

function pausedAnimation(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      marqueeLine.forEach(e => e.classList.remove('paused'));
    } else {
      marqueeLine.forEach(e => e.classList.add('paused'));
    }
  });
}

observer.observe(targetSection);

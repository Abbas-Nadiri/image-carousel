import './styles.css';

const carousel = document.querySelector('.carousel');
let carouselImgs = carousel.querySelectorAll('img');
carouselImgs = [...carouselImgs];
let currentIndex = carouselImgs.findIndex((img) =>
  img.classList.contains('displayed'),
);

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dotsContainer = document.querySelector('.nav-dots-container');

//add navigation dots for each photo in carousel
carouselImgs.forEach((img) => {
  const navDot = document.createElement('span');
  navDot.classList.add('dot');
  navDot.classList.add('clickable');
  dotsContainer.append(navDot);

  navDot.addEventListener('click', () => {
    let btnIndex = carouselImgs.indexOf(img);
    currentIndex = btnIndex - 1;
    nextButton.click();
  });
});

let navDots = dotsContainer.querySelectorAll('span');
navDots = [...navDots];

function updateSelectedDot() {
  navDots.forEach((dot) => dot.classList.remove('selected-dot'));
  navDots[currentIndex].classList.add('selected-dot');
}

updateSelectedDot();

prevButton.addEventListener('click', () => {
  carouselImgs.forEach((img) => img.classList.remove('displayed'));
  if (currentIndex === 0) {
    currentIndex = carouselImgs.length;
  }
  currentIndex = --currentIndex;
  carouselImgs[currentIndex].classList.add('displayed');
  updateSelectedDot();
});

nextButton.addEventListener('click', () => {
  carouselImgs.forEach((img) => img.classList.remove('displayed'));
  currentIndex = ++currentIndex;
  if (currentIndex === carouselImgs.length) {
    currentIndex = 0;
  }
  carouselImgs[currentIndex].classList.add('displayed');
  updateSelectedDot();
});

let timeout;

function resetTimeout() {
  clearTimeout(timeout);
  timeout = setTimeout(() => nextButton.click(), 5000);
}

resetTimeout();
//get all clickable elements
let allButtons = document.querySelectorAll('.clickable');
allButtons = [...allButtons];
allButtons.forEach((button) => {
  button.addEventListener('click', () => {
    resetTimeout();
  });
});

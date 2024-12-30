import './styles.css';

let carouselImgs = document.querySelectorAll('img');
carouselImgs = [...carouselImgs];
let currentIndex = carouselImgs.findIndex((img) =>
  img.classList.contains('displayed'),
);
console.log(currentIndex);

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
  carouselImgs.forEach((img) => img.classList.remove('displayed'));
  if (currentIndex === 0) {
    currentIndex = carouselImgs.length;
  }
  currentIndex = currentIndex - 1;
  carouselImgs[currentIndex].classList.add('displayed');
});

nextButton.addEventListener('click', () => {
  carouselImgs.forEach((img) => img.classList.remove('displayed'));
  currentIndex = ++currentIndex;
  if (currentIndex === carouselImgs.length) {
    currentIndex = 0;
  }
  carouselImgs[currentIndex].classList.add('displayed');
});

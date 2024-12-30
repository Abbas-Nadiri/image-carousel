import "./styles.css"

//11:35 In instances where your offset is always small-ish, 
//these two checks can be replaced with a single calculation:
//newIndex = (newIndex + slides.children.length) % slides.children.length;
//(This assumes there is at least one slide in the carousel.)

//const carousel = document.querySelector(".carousel");
let carouselImgs = document.querySelectorAll("img");
carouselImgs = [...carouselImgs];
let currentIndex = carouselImgs.findIndex(img => img.classList.contains("displayed"));
console.log(currentIndex);

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener("click", () => {
    carouselImgs.forEach(img => img.classList.remove("displayed"));
    if(currentIndex === 0) {
        currentIndex = carouselImgs.length;
    };
    currentIndex = currentIndex - 1;
    carouselImgs[currentIndex].classList.add("displayed");
})

nextButton.addEventListener("click", () => {
    carouselImgs.forEach(img => img.classList.remove("displayed"));
    currentIndex = ++currentIndex;
    if(currentIndex === carouselImgs.length) {
        currentIndex = 0;
    };
    carouselImgs[currentIndex].classList.add("displayed");
})
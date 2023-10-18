const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".slideshow-container i");
const firstCardWidth = carousel.querySelector(".carousel-slide").offsetWidth;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

arrowBtns.forEach(btn => {
 btn.addEventListener("click", () => {
  carousel.scrollLeft += btn.id === "left" ?  Math.ceil(-firstCardWidth) : Math.ceil(firstCardWidth);
 })
});
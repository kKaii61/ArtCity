//Đợi DOM load xong thì javascript gọi mới k bị lỗi
document.addEventListener("DOMContentLoaded", function() {
    banner();
    carousel();
});



// CAROUSEL //
const wrapper = document.querySelector(".slideshow-container");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".slideshow-container i");
const firstCardWidth = carousel.querySelector(".carousel-slide").offsetWidth;

const img = document.querySelector("img");
img.ondragstart = () => {
  return false;
};


let isDragging = false, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

arrowBtns.forEach(btn => {
 btn.addEventListener("click", () => {
  carousel.scrollLeft += btn.id === "left" ?  Math.ceil(-firstCardWidth) : Math.ceil(firstCardWidth);
})
});

// const dragStart = (e) => {
//     isDragging = true;
//     carousel.classList.add("dragging");
//     startX = e.pageX;
//     startScrollLeft = carousel.scrollLeft;
// }
// const dragStop = () => {
//     isDragging = false;
//     carousel.classList.remove("dragging");
// }
// const dragging = (e) => {
//     if(!isDragging) return;
//     carousel.scrollLeft =  startScrollLeft - (e.pageX - startX);
// }

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
body.addEventListener("mouseup",dragStop);
body.addEventListener("mouseudown",dragStop);


// var myIndex = 0;
// function banner() {
//     var i;
//     var x = document.getElementsByClassName("banner-item");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) {myIndex = 1}
//     x[myIndex-1].style.display = "block";
//     setTimeout(banner, 2000);
    
// }


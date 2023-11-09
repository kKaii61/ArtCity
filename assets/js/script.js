//Đợi DOM load xong thì javascript gọi mới k bị lỗi
document.addEventListener("DOMContentLoaded", function() {
    banner();
    carousel();
});

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("banner-item");

    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}


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


function them(button) {
    var row = button.parentElement.parentElement.cloneNode(true); 
    var btnxoa = row.getElementsByTagName("button")[0];
    btnxoa.innerText = "Xóa";
    btnxoa.setAttribute('onclick', 'xoa(this)');
    document.getElementById("cart").appendChild(row);
}

function xoa(button) {
    var row = button.parentElement.parentElement;
    document.getElementById("cart").removeChild(row);
}


function tinhtong(){
    var cart = document.getElementById("cart"); 
    var rows = cart.getElementsByTagName("tr");
    var tong = 0;
    for (var i = 0; i < rows.length; i++) {
        var price = rows[i].children[3].innerText;
        var number = rows[i].children[4].innerText;
        price=parseInt(price);
        number=parseInt(number);
        tong+= price * number;
    }
    document.getElementById("total").innerText = tong;
}
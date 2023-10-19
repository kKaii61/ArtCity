//Đợi DOM load xong thì javascript gọi mới k bị lỗi
document.addEventListener("DOMContentLoaded", function() {
    banner();
    carousel();
});

var myIndex = 0;
function banner() {
    var i;
    var x = document.getElementsByClassName("banner-item");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(banner, 2000);
}

function carousel() {
    const carousel = document.querySelector(".carousel");
    const arrowBtns = document.querySelectorAll(".slideshow-container i");
    const firstCardWidth = carousel.querySelector(".carousel-slide").offsetWidth;
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    arrowBtns.forEach(btn => {
     btn.addEventListener("click", () => {
      carousel.scrollLeft += btn.id === "left" ?  Math.ceil(-firstCardWidth) : Math.ceil(firstCardWidth);
     })
    });
}

const images = [
    {
        img: "./assets/img/autoplay/index-image.png",
        number: "1 / 7",
    },
    {
        img: "./assets/img/autoplay/index-image-01.png",
        number: "2 / 7",
    },
    {
        img: "./assets/img/autoplay/index-image-02.png",
        number: "3 / 7",
    },
    {
        img: "./assets/img/autoplay/1.png",
        number: "4 / 7",
    },
    {
        img: "./assets/img/autoplay/2.png",
        number: "5 / 7",
    },
    {
        img: "./assets/img/autoplay/3.png",
        number: "6 / 7",
    },
    {
        img: "./assets/img/autoplay/4.png",
        number: "7 / 7",
    },
]



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




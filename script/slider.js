"use strict";

let nextSlideBtn,
    prevSlideBtn,
    slidesBlock,
    slidesArray;

nextSlideBtn = document.querySelector("#nextSlideBtn");
prevSlideBtn = document.querySelector("#prevSlideBtn");
slidesBlock = document.querySelector(".slides");
slidesArray = document.getElementsByClassName("slide");

let currentSlideIndex = 0;

function checkSlideIndex() {
    if (currentSlideIndex === slidesArray.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex === -1) {
        currentSlideIndex = slidesArray.length - 1;
    }
}

function nextSlide() {
    slidesArray[currentSlideIndex].classList.remove("slide--active");
    ++currentSlideIndex;
    checkSlideIndex();
    slidesArray[currentSlideIndex].classList.add("slide--active");
    slidesBlock.style.transform = "translateX(-" + currentSlideIndex + "00%)";
}

function prevSlide() {
    slidesArray[currentSlideIndex].classList.remove("slide--active");
    --currentSlideIndex;
    checkSlideIndex();
    slidesArray[currentSlideIndex].classList.add("slide--active");
    slidesBlock.style.transform = "translateX(-" + currentSlideIndex + "00%)";
}

nextSlideBtn.addEventListener("click", () => {
    nextSlide();
})

prevSlideBtn.addEventListener("click", () => {
    prevSlide();
});



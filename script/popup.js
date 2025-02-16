"use strict";

let popupBtn,
    popupBlock;


popupBtn = document.querySelectorAll(".popup-button");
popupBlock = document.querySelector(".popup-block");

popupBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        popupBlock.style.display = "flex";
    });
});

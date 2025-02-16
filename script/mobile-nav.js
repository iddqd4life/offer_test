"use strict";

let burgerBtn,
    mobileNav;


burgerBtn = document.getElementById("burger-btn");
mobileNav = document.querySelector(".mobile-nav");

burgerBtn.addEventListener("click", () => {
    mobileNav.style.display = "flex";
})
const burger = document.querySelector(".hamburger");
const burgerBorder = document.querySelector(".profile__img__login");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

burger.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(0)";
  mobileMenu.style.opacity = "1";
  burger.style.opacity = "0";
  burgerBorder.style.opacity = "0";
});

closeMenu.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(100%)";
  mobileMenu.style.opacity = "0";
  burger.style.opacity = "1";
  burgerBorder.style.opacity = "1";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 300 && window.innerWidth <= 1023) {
    mobileMenu.style.transform = "translateX(100%)";
  }
});

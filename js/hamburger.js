const burger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

burger.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(0)";
  mobileMenu.style.opacity = "1";
});

closeMenu.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(100%)";
  mobileMenu.style.opacity = "0";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 300 && window.innerWidth <= 1023) {
    mobileMenu.style.transform = "translateX(100%)";
  }
});

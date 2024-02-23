let currentSlide = 1;

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");

  if (n > slides.length) {
    currentSlide = 1;
  }

  if (n < 1) {
    currentSlide = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[currentSlide - 1].style.display = "grid";

  // Trigger fade-in for icon and start timer for text fade-in
  const icon = slides[currentSlide - 1].querySelector(".icon");
  icon.classList.add("fade-in");
  const textContainer =
    slides[currentSlide - 1].querySelector(".text-container");
  const introTitle = slides[currentSlide - 1].querySelector(".intro__title");
  const introContents =
    slides[currentSlide - 1].querySelector(".intro__contents");
  const goToRegister =
    slides[currentSlide - 1].querySelector(".go_to_register");
  setTimeout(() => {
    textContainer.style.display = "grid";
    textContainer.classList.add("fade-in");
  }, 1000);
  setTimeout(() => {
    introTitle.style.display = "flex";
    introTitle.classList.add("fade-in");
  }, 1000);
  setTimeout(() => {
    introContents.style.display = "flex";
    introContents.classList.add("fade-in");
  }, 1500);
  setTimeout(() => {
    goToRegister.style.display = "flex";
    goToRegister.classList.add("fade-in");
  }, 2000);
}

function changeSlide(n) {
  showSlides((currentSlide += n));
}

showSlides(currentSlide);

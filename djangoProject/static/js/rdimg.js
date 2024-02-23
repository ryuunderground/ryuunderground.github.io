const rdImg = document.querySelector(".rdimg");
let currentIndex = 0;

function showRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const imageUrl = images[randomIndex];

  const newImage = new Image();
  newImage.src = imageUrl;
  newImage.onload = function () {
    // 이미지 로딩이 완료된 후에 표시합니다.
    rdImg.innerHTML = "";
    rdImg.appendChild(newImage);
    newImage.style.display = "block";

    // 다음 이미지를 3초 후에 표시합니다.
    setTimeout(showRandomImage, 3000);
  };

  currentIndex = randomIndex;
}

showRandomImage(); // 초기 호출

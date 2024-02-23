function displayNotices() {
  const noticesContainer = document.querySelector(".notices__container");
  noticesContainer.innerHTML = "";

  // 로컬 스토리지에서 게시물 가져오기
  let notices = JSON.parse(localStorage.getItem("notices")) || [];

  // 가져온 게시물을 목록에 추가
  notices.sort(function (a, b) {
    return b.order - a.order;
  });

  notices.forEach(function (notice) {
    const noticeElement = document.createElement("div");
    noticeElement.className = "contents__collumn";
    noticeElement.innerHTML =
      "<span>" +
      notice.order +
      "</span><span><a href='/templates/notification_contents.html'<span class='span-anchor'>" +
      notice.title +
      "</span></a><span>" +
      notice.timeline +
      "</span>";
    noticesContainer.appendChild(noticeElement);
  });
}

// 페이지 로드 시 저장된 게시물 목록 표시
window.onload = displayNotices;

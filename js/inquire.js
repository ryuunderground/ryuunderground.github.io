function displayPosts() {
  const postsContainer = document.querySelector(".posts__container");
  postsContainer.innerHTML = "";

  // 로컬 스토리지에서 게시물 가져오기
  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  // 가져온 게시물을 목록에 추가
  posts.sort(function (a, b) {
    return b.order - a.order;
  });

  posts.forEach(function (post) {
    const postElement = document.createElement("div");
    postElement.className = "contents__collumn";
    postElement.innerHTML =
      "<span>" +
      post.order +
      "</span><a href='/templates/notification_contents.html'<span class='span-anchor'>" +
      post.title +
      "</span></a><span>" +
      post.timeline +
      "</span>";
    postsContainer.appendChild(postElement);
  });
}

// 페이지 로드 시 저장된 게시물 목록 표시
window.onload = displayPosts;

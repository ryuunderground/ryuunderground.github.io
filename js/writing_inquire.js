const uploadBtn = document.querySelector(".upload__btn");
const inputTitle = document.querySelector(".title__input");
const inputParagraph = document.querySelector(".paragraph__input");
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("ko-KR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function submitPost(event) {
  const title = inputTitle.value;
  const paragraph = inputParagraph.value;

  // 현재 로컬 스토리지에 저장된 게시물 가져오기
  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  // 새로운 게시물 객체 생성
  const newPost = {
    order: posts.length + 1,
    title: title,
    paragraph: paragraph,
    timeline: formattedDate,
  };
  // 새로운 게시물을 배열에 추가
  posts.push(newPost);

  // 로컬 스토리지에 업데이트된 게시물 저장
  localStorage.setItem("posts", JSON.stringify(posts));

  //등등 서버로 문의 내용 전송//
  //나는 연결할 능력이 없기에 일단 로컬 스토리지로....//
  event.preventDefault();
  window.location.replace("/templates/inquire.html");
  window.alert("문의 내용이 작성되었습니다.");
}

uploadBtn.addEventListener("click", submitPost);

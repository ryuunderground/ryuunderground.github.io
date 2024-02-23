const loginInput = document.querySelector(".login-form");
const idInput = loginInput.querySelector(".id");
const pwInput = loginInput.querySelector(".pw");
const loginBtn = loginInput.querySelector(".login__btn");

function login(event) {
  const id = idInput.value;
  const pw = pwInput.value;
  let accountInfos = JSON.parse(localStorage.getItem("account__info")) || [];
  let ids = [];
  let pws = [];
  accountInfos.forEach(function (info) {
    ids.push(info.id);
  });
  accountInfos.forEach(function (info) {
    pws.push(info.password);
  });
  if (ids.includes(id) && pws.includes(pw)) {
    event.preventDefault();
    window.location.replace("/template/main.html");
  } else {
    event.preventDefault();
    console.log(ids);
    console.log(pws);

    //window.alert("아이디 또는 비밀번호가 일치하지 않습니다.");//
  }
}

loginBtn.addEventListener("click", login);

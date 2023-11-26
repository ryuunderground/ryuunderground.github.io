const registerForm = document.querySelector(".register-form");
const usernameInput = registerForm.querySelector(".username");
const idInput = registerForm.querySelector(".id");
const passwordInput = registerForm.querySelector(".pw");
const nicknameInput = registerForm.querySelector(".nickname");
const fPhoneInput = registerForm.querySelector("#first_phone_number");
const sPhoneInput = registerForm.querySelector("#second_phone_number");
const tPhoneInput = registerForm.querySelector("#third_phone_number");
const registerBtn = document.querySelector(".register__btn");

function submitRegister(event) {
  const username = usernameInput.value;
  const id = idInput.value;
  const password = passwordInput.value;
  const nickname = nicknameInput.value;
  const fPhone = fPhoneInput.value;
  const sPhone = sPhoneInput.value;
  const tPhone = tPhoneInput.value;

  // 현재 로컬 스토리지에 저장된 정보 가져오기
  let accountInfos = JSON.parse(localStorage.getItem("account__info")) || [];
  let ids = [];
  accountInfos.forEach(function (info) {
    ids.push(info.id);
  });

  if (ids.includes(id)) {
    event.preventDefault();
    alert("이미 존재하는 아이디입니다. 다른 아이디를 사용해주세요.");
  } else {
    // 새로운 게시물 객체 생성
    const newAccount = {
      name: username,
      nickname: nickname,
      id: id,
      password: password,
      phone_1: fPhone,
      phone_2: sPhone,
      phone_3: tPhone,
    };
    // 새로운 게시물을 배열에 추가
    accountInfos.push(newAccount);

    // 로컬 스토리지에 업데이트된 게시물 저장
    localStorage.setItem("account__info", JSON.stringify(accountInfos));

    //나는 외부 서버랑 연결할 능력이 없기에 일단 로컬 스토리지로....//
    event.preventDefault();
    window.location.replace("/templates/login.html");
    window.alert("회원 가입이 완료되었습니다.");
  }
}
registerBtn.addEventListener("click", submitRegister);

const registerForm = document.querySelector("form");
const passwordInput = registerForm.querySelector(".pw");
const passwordCheck = registerForm.querySelector(".pw_check");
const registerBtn = document.querySelector("button");

function pwCheck(event) {
  const pwCheck = usernameInput.value;
  const pw = passwordInput.value;
  if (pw != pwCheck) {
    event.preventDefault();
    alert("비밀 번호를 다시 확인 해 주세요.");
  } else {
    console.log(pw);
    console.log(passwordCheck);
  }
}

registerBtn.addEventListener("click", pwCheck);

const age = document.querySelector("#adult-check");

function ageAlert() {
  if (age.checked === true) {
    window.alert("미성년자의 가입 시 제명 및 불이익이 있을 수 있습니다.");
  } else {
    window.alert("죄송합니다. 어른이 되어 다시 만나요.");
  }
}

age.addEventListener("change", ageAlert);

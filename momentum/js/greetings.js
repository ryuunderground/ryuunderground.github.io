const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";
const savedUsername = localStorage.getItem(USERNAME_KEY);
const toDoFormForG = document.querySelector("#todo-form");
const quoteForG = document.querySelector("#quote");
const weatherForG = document.querySelector("#weather");
const toDoListForG = document.querySelector("#todo-list");
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  weatherForG.classList.remove(HIDDEN_CLASSNAME);
  quoteForG.classList.remove(HIDDEN_CLASSNAME);
  toDoFormForG.classList.remove(HIDDEN_CLASSNAME);
  toDoListForG.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

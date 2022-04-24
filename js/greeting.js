const fullScreen = document.getElementById("lay-out");
const loginForm =  document.querySelector("#login-form");
const loginInput =  document.querySelector("#login-form input");
const greeting = document.querySelector(".main-contents__greeting");

const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  fullScreen.style.display = "flex";
  loginForm.style.display = "none";
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello! ${username}`;
  greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  // show the form
  fullScreen.style.display = "none";
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  loginForm.style.display = "none";
  paintGreetings(savedUsername);
}

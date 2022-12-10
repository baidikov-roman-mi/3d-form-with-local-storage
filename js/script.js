const register = document.querySelector(".register");
const login = document.querySelector(".login");
const switchLine = document.querySelector(".switch-line");
// top switcher
const frontSide = document.querySelector(".front-side");
const backSide = document.querySelector(".back-side");
// cards
// login function
login.onclick = function () {
  switchLine.classList.add("active-login");
  login.classList.add("active-title");
  register.classList.remove("active-title");
  switchLine.classList.remove("active-register");
  // front syde style
  frontSide.style.transform = "rotateY(180deg)";
  backSide.style.transform = "rotateY(0deg)";
};
// register function
register.onclick = function () {
  switchLine.classList.add("active-register");
  register.classList.add("active-title");
  login.classList.remove("active-title");
  switchLine.classList.remove("active-login");
  // back side style
  frontSide.style.transform = "rotateY(0deg)";
  backSide.style.transform = "rotateY(180deg)";
};

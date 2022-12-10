localStorage.setItem("Username", "Roman Baidicov");
localStorage.setItem("Email", "wolkdem@gmail.com");
localStorage.setItem("Password", "123123");
localStorage.setItem("Status", "false");
let signStatus = localStorage.getItem("Status");
let newInputUsername = document.querySelector(".username-front");
let newInputPassword = document.querySelector(".password-front");
let newInputEmail = document.querySelector(".email-front");
let newUserAdd = document.querySelector(".submit-front");
let inputPassword = document.querySelector(".password-back");
let inputEmail = document.querySelector(".email-back");
let userEnter = document.querySelector(".submit-back");
let exitBtn = document.querySelector(".exit-btn");
let container = document.querySelector(".container");
let containerUser = document.querySelector(".container-user");
let alertUserName = document.querySelector(".alert-user-name");
let alertUserEmail = document.querySelector(".alert-user-email");
let cautionAlert = document.querySelector(".caution-container");
let errMessage = document.querySelector(".err-message");

let contPassChange = document.querySelector(".container-password-change");
let changePass = document.querySelector(".forgot-password");
let resetEmail = document.querySelector(".reset-email");
let caphaInput = document.querySelector(".capha-input");
let capha = document.querySelector(".capha");
let activeReset = document.querySelector(".active-reset");
let resetExitBtn = document.querySelector(".reset-exit-btn");
let newResetPassword = document.querySelector(".reset-password");
let reset = document.querySelector(".submit-reset");

newInputUsername.oninput = formNaming;
newInputPassword.oninput = formNaming;
newInputEmail.oninput = formNaming;
inputPassword.oninput = formNaming;
inputEmail.oninput = formNaming;
resetEmail.oninput = formNaming;
userEnter.onclick = sendForm;
newUserAdd.onclick = sendNewUserForm;
exitBtn.onclick = exit;
resetExitBtn.onclick = exit;
caphaInput.oninput = formNaming;
caphaInput.onkeypress = enterFunction;
changePass.onclick = changePassword;
newResetPassword.oninput = formNaming;
reset.onclick = saveNewPass;

function formNaming() {
  return (
    newInputUsername.value,
    newInputEmail.value,
    newInputPassword.value,
    inputEmail.value,
    inputPassword.value,
    caphaInput.value,
    resetEmail.value,
    newResetPassword.value
  );
}

function sendNewUserForm() {
  if (
    newInputUsername.value == "" ||
    newInputPassword.value == "" ||
    newInputEmail.value == ""
  ) {
    errMessage.innerHTML = "Error detected: Input field cannot be empty!";
    cautionAlert.classList.remove("hidden");
    setTimeout(() => {
      cautionAlert.classList.add("hidden");
    }, 5000);
  } else {
    localStorage.setItem(`Username_New`, newInputUsername.value);
    localStorage.setItem(`Email_New`, newInputEmail.value);
    localStorage.setItem(`Password_New`, newInputPassword.value);
    localStorage.setItem("Status", "true");

    let newUsername = localStorage.getItem(`Username_New`);
    let newEmail = localStorage.getItem(`Email_New`);
    let newPassword = localStorage.getItem(`Password_New`);
    localStorage.setItem("Status", "true");
    container.classList.add("hidden");
    containerUser.classList.remove("hidden");
    alertUserName.innerHTML = newUsername;
    alertUserEmail.innerHTML = newEmail;
    return newEmail, newPassword, newUsername;
  }
}

function exit() {
  localStorage.setItem("Status", "false");
  container.classList.remove("hidden");
  containerUser.classList.add("hidden");
  alertUserName.innerHTML = "none";
  alertUserEmail.innerHTML = "none";
  contPassChange.classList.add("hidden");
}

let rndCapha = Math.floor(Math.random() * 10000) + 100;

capha.innerHTML = rndCapha;
function enterFunction(e) {
  if (e.which == 13 && caphaInput.value == rndCapha) {
    activeReset.classList.remove("hidden");
    caphaInput.classList.remove("wrong");
    caphaInput.classList.add("greate");
  } else {
    caphaInput.classList.add("wrong");
  }
}

function changePassword() {
  contPassChange.classList.remove("hidden");
  container.classList.add("hidden");
}
function saveNewPass() {
  let email = localStorage.getItem("Email");
  if (resetEmail.value == email) {
    localStorage.setItem("Password", newResetPassword.value);
    container.classList.remove("hidden");
    containerUser.classList.add("hidden");
    contPassChange.classList.add("hidden");
  } else {
    resetEmail.classList.add("wrong-email");
  }
}

function sendForm(newEmail, newPassword, newUsername) {
  let username = localStorage.getItem("Username");
  let password = localStorage.getItem("Password");
  let email = localStorage.getItem("Email");
  if (inputPassword.value == "" || inputEmail.value == "") {
    errMessage.innerHTML = `Error detected: Input field cannot be empty!`;
    cautionAlert.classList.remove("hidden");
    setTimeout(() => {
      cautionAlert.classList.add("hidden");
    }, 5000);
  }

  if (inputPassword.value == password && inputEmail.value == email) {
    localStorage.setItem("Status", "true");
    container.classList.add("hidden");
    containerUser.classList.remove("hidden");
    alertUserName.innerHTML = username;
    alertUserEmail.innerHTML = email;
  }

  if (
    (inputPassword.value != newPassword && inputEmail.value != newEmail) ||
    (inputPassword.value != password && inputEmail.value != email)
  ) {
    errMessage.innerHTML = `Error detected: Wrong <strong>email</strong> address or <strong>password</strong>!`;
    cautionAlert.classList.remove("hidden");
    setTimeout(() => {
      cautionAlert.classList.add("hidden");
    }, 5000);
  }
  if (inputPassword.value == newPassword && inputEmail.value == newEmail) {
    localStorage.setItem("Status", "true");
    container.classList.add("hidden");
    containerUser.classList.remove("hidden");
    alertUserName.innerHTML = newUsername;
    alertUserEmail.innerHTML = newEmail;
  }
}

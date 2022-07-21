let firstName = document.getElementById("inputFirstName");
let lastName = document.getElementById("inputLastName");
let email = document.getElementById("inputEmail");
let phone = document.getElementById("inputPhone");
let password = document.getElementById("inputPassword");
let confirm = document.getElementById("inputConfirm");
let spanFName = document.getElementById("spanFName");
let spanLName = document.getElementById("spanLName");
let spanEmail = document.getElementById("spanEmail");
let spanPhone = document.getElementById("spanPhone");
let spanPassword = document.getElementById("spanPassword");
let form = document.getElementById("form");

let submit = () => {
  function fName() {
    if (firstName.value.trim() == "") {
      spanFName.innerHTML = "First Name must not be empty!";
    }
  }

  function lName() {
    if (lastName.value.trim() == "") {
      spanLName.innerHTML = "Last Name must not be empty!";
    }
  }

  function passwordVal() {
    if (password.value.trim() === "") {
      spanPassword.innerHTML = "Password must not be empty!";
    } else if (password.value.length < 5) {
      spanPassword.innerHTML = "Password must be above 5 characters!";
    } else if (password.value !== confirm.value) {
      spanPassword.innerHTML = "Passwords must match!";
    } else {
      window.location.reload();
    }

    fName();
    lName();
    passwordVal();
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submit();
});

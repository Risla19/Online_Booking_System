const registerForm = document.querySelector(".register-form");

if (registerForm) {

  registerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const password =
      document.querySelectorAll(".register-form input")[3].value;

    const confirmPassword =
      document.querySelectorAll(".register-form input")[4].value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    }

    else {
      alert("Registration Successful!");
    }

  });

}
const menuToggle = document.querySelector(".menu-toggle");

const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", function() {

  navbar.classList.toggle("active");

});
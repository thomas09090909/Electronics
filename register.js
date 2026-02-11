document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  form.addEventListener("submit", function (event) {
    // Clear previous error messages
    clearErrorMessages();

    let isValid = true;

    // Validate Full Name (must not be empty)
    if (nameInput.value.trim() === "") {
      showError(nameInput, "Full Name is required.");
      isValid = false;
    }

    // Validate Email (must follow proper email format)
    if (!isValidEmail(emailInput.value)) {
      showError(emailInput, "Please enter a valid email address.");
      isValid = false;
    }

    // Validate Password (must be at least 8 characters)
    if (passwordInput.value.length < 8) {
      showError(passwordInput, "Password must be at least 8 characters long.");
      isValid = false;
    }

    // Validate Confirm Password (must match Password)
    if (passwordInput.value !== confirmPasswordInput.value) {
      showError(confirmPasswordInput, "Passwords do not match.");
      isValid = false;
    }

    // If the form is not valid, prevent submission
    if (!isValid) {
      event.preventDefault();
    }
  });

  // Helper function to display error messages
  function showError(input, message) {
    const error = document.createElement("div");
    error.classList.add("error-message");
    error.textContent = message;
    input.parentElement.appendChild(error);
    input.classList.add("error-input");
  }

  // Helper function to clear previous error messages
  function clearErrorMessages() {
    const errors = document.querySelectorAll(".error-message");
    errors.forEach(function (error) {
      error.remove();
    });
    const errorInputs = document.querySelectorAll(".error-input");
    errorInputs.forEach(function (input) {
      input.classList.remove("error-input");
    });
  }

  // Helper function to check if an email is valid
  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }
});

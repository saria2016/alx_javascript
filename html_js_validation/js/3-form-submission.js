// Retrieve the form element
var submitForm = document.getElementById("submitForm");

// Add an event listener to the form submission
submitForm.addEventListener("submit", handleFormSubmit);

// Function to handle the form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior
  
  // Retrieve the form field values
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirm-password");
  
  // Retrieve the error message elements
  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");
  var confirmPasswordError = document.getElementById("confirmPasswordError");
  
  // Clear any existing error messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  
  // Perform validation
  var isValid = true;
  
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please fill in the name field.";
    isValid = false;
  }
  
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Please fill in the email field.";
    isValid = false;
  }
  
  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "Please fill in the password field.";
    isValid = false;
  }
  
  if (confirmPasswordInput.value.trim() === "") {
    confirmPasswordError.textContent = "Please fill in the confirm password field.";
    isValid = false;
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  }
  
  // Display error message or submit the form
  if (!isValid) {
    return; // Prevent form submission if there are errors
  }
  
  // Form submitted successfully
  alert("Form submitted successfully!");
  submitForm.submit();
}
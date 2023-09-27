// Retrieve  element by using ID
var form = document.getElementById('passwordForm');
var passwordInput = document.getElementById('password');

// Attach an event listener to the form's submit event
form.addEventListener('submit', function(event) {
  // Prevent the form from being submitted by default
  event.preventDefault();

  // Retrieve the password input value
  var password = passwordInput.value;

  // Trim leading/trailing whitespace and check for blank password
  if (password.trim() === '') {
    displayError('Password cannot be blank.');
    return;
  }

  // Validate the password
  var isValid = validatePassword(password);

  // Display error message or submit the form
  if (isValid) {
    // Clear any previous error message
    clearError();

    // Add green border around the password input
    passwordInput.style.border = '2px solid green';

    // Submit the form
    form.submit();
  } else {
    // Display an error message
    displayError('Password does not meet the criteria.');

    // Remove the green border from the password input
    passwordInput.style.border = '';
  }
});

// Attach an event listener to the password input's input event to check it when user is typing
passwordInput.addEventListener('input', function() {
  // Clear the error message when the user starts typing
  clearError();

  // Remove the green border when the user starts typing
  passwordInput.style.border = '';
});

// Function to display an error message
function displayError(message) {
  var errorElement = document.getElementById('error');
  errorElement.textContent = message;
}

// Function to clear the error message
function clearError() {
  var errorElement = document.getElementById('error');
  errorElement.textContent = '';
}

// Function to validate the password to check it if meet all criteria
function validatePassword(password) {
  // Define the password criteria using regular expressions
  var lengthRegex = /.{8,}/;
  var uppercaseRegex = /[A-Z]/;
  var lowercaseRegex = /[a-z]/;
  var numericRegex = /\d/;
  var specialCharRegex = /[!@#$%^&*]/;

  // Check if the password meets all the criteria
  var isValid =
    lengthRegex.test(password) &&
    uppercaseRegex.test(password) &&
    lowercaseRegex.test(password) &&
    numericRegex.test(password) &&
    specialCharRegex.test(password);

  // Return the validation result
  return isValid;
}
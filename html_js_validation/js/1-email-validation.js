// Retrieve the form element
var form = document.getElementById('emailForm');

// Retrieve the email input element
var emailInput = document.getElementById('email');

// Attach an event listener to the form's submit event
form.addEventListener('submit', function(event) {
  // Prevent the form from being submitted by default
  event.preventDefault();

  // Retrieve the email input value
  var email = emailInput.value;

  // Trim leading/trailing whitespace and check for blank email
  if (email.trim() === '') {
    // Display an error message for blank email
    displayError('Email cannot be blank.');
    return;
  }

  // Validate the email
  var isValid = validateEmail(email);

  // Display error message or submit the form
  if (isValid) {
    // Clear any previous error message
    clearError();

    // Submit the form
    form.submit();
  } else {
    // Display an error message
    displayError('Please enter a valid email address.');
  }
});

// Attach an event listener to the email input's input event
emailInput.addEventListener('input', function() {
  // Remove the error message when the user starts typing
  clearError();

  // Add green border around the email input
  emailInput.style.border = '2px solid green';
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

  // Remove the green border from the email input
  emailInput.style.border = '';
}

// Function to validate the email
function validateEmail(email) {
  // Define the email format using regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the format
  var isValid = emailRegex.test(email);

  // Return the validation result
  return isValid;
}
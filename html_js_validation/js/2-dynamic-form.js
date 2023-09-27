// Retrieve the dynamic form, input container, and submit button
var dynamicForm = document.getElementById("dynamicForm");
var inputContainer = document.getElementById("inputContainer");
var submitButton = document.querySelector("button[type='submit']");

// Add an event listener to the dropdown menu to generate input fields dynamically
var numFieldsSelect = document.getElementById("numFields");
numFieldsSelect.addEventListener("change", function() {
  var selectedValue = parseInt(numFieldsSelect.value);
  generateInputFields(selectedValue);
});

// Add an event listener to the form submission to perform form validation
dynamicForm.addEventListener("submit", function(event) {
  if (!validateForm()) {
    event.preventDefault(); // Prevent form submission if validation fails
    // Display the error messages
    displayErrorMessages();
  } else {
    // Clear any existing error messages and remove the green border
    clearErrorMessages();
    removeGreenBorder();
  }
});

// Add event listeners to the input fields to clear error messages and show green border when typing
inputContainer.addEventListener("input", function(event) {
  if (event.target.tagName === "INPUT") {
    clearErrorMessage(event.target);
    addGreenBorder(event.target);
  }
});

// Function to generate the specified number of text input fields dynamically
function generateInputFields(numFields) {
  // Clear any existing input fields and error messages
  inputContainer.innerHTML = "";

  // Generate the desired number of text input fields
  for (var i = 1; i <= numFields; i++) {
    var input = document.createElement("input");
    input.type = "text";
    input.name = "field" + i;
    input.placeholder = "Field " + i;
    inputContainer.appendChild(input);

    // Create error message element for each input field
    var errorMessage = document.createElement("p");
    errorMessage.className = "error-message";
    errorMessage.style.display = "none";
    inputContainer.appendChild(errorMessage);
  }
}

// Function to validate the form before submission
function validateForm() {
  var inputs = inputContainer.getElementsByTagName("input");
  var errorMessages = inputContainer.getElementsByClassName("error-message");

  var isValid = true;

  // Reset error messages
  for (var i = 0; i < errorMessages.length; i++) {
    errorMessages[i].textContent = "";
    errorMessages[i].style.display = "none";
  }

  // Check if any of the dynamically generated fields are empty
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      isValid = false;
      var errorMessage = errorMessages[i];
      errorMessage.textContent = "Please fill in this field.";
      errorMessage.style.display = "block";
    }
  }

  return isValid;
}

// Function to display the error messages
function displayErrorMessages() {
  var errorMessages = inputContainer.getElementsByClassName("error-message");

  for (var i = 0; i < errorMessages.length; i++) {
    var errorMessage = errorMessages[i];
    errorMessage.style.display = "block";
  }
}

// Function to clear the error messages
function clearErrorMessages() {
  var errorMessages = inputContainer.getElementsByClassName("error-message");

  for (var i = 0; i < errorMessages.length; i++) {
    var errorMessage = errorMessages[i];
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
  }
}

// Function to clear a specific error message
function clearErrorMessage(input) {
  var errorMessage = input.nextElementSibling;
  errorMessage.textContent = "";
  errorMessage.style.display = "none";
}

// Function to add a green border to the input field
function addGreenBorder(input) {
  input.style.border = "2px solid green";
}

// Function to remove the green border from the input field
function removeGreenBorder() {
  var inputs = inputContainer.getElementsByTagName("input");

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].style.border = "";
  }
}
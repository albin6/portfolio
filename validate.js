const sbtForm = document.getElementById("sbt-btn");

function showErrorMessage(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  return !message; // Return true if no error message, false otherwise
}

function validateName() {
  const name = document.getElementById("name").value.trim();
  if (!name) {
    return showErrorMessage("name-err-msg", "Name cannot be blank!");
  }
  if (/\d+/.test(name)) {
    return showErrorMessage("name-err-msg", "Name cannot include numbers!");
  }
  return showErrorMessage("name-err-msg", "");
}

function validateEmail() {
  const email = document.getElementById("email").value.trim();
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
    return showErrorMessage("email-err-msg", "Email cannot be blank!");
  }
  if (!regex.test(email)) {
    return showErrorMessage("email-err-msg", "Email not in format!");
  }
  return showErrorMessage("email-err-msg", "");
}

function validateSubject() {
  const subject = document.getElementById("subject").value.trim();
  if (!subject) {
    return showErrorMessage("sub-err-msg", "Subject cannot be blank!");
  }
  return showErrorMessage("sub-err-msg", "");
}

function validateMessage() {
  const message = document.getElementById("message").value.trim();
  if (!message) {
    return showErrorMessage("msg-err-msg", "This field cannot be blank!");
  }
  return showErrorMessage("msg-err-msg", "");
}

function validateForm() {
  const valName = validateName();
  const valEmail = validateEmail();
  const valSubject = validateSubject();
  const valMessage = validateMessage();
  return valName && valEmail && valSubject && valMessage;
}

sbtForm.addEventListener("click", (e) => {
  if (!validateForm()) {
    e.preventDefault();
  }
});
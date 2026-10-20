const form = document.querySelector("#signup-form");
const fields = document.querySelector("#signup-fields");
const message = document.querySelector("#form-message");
const loginLink = document.querySelector("#login-link");

// Native browser validation runs before the submit event.
// Prevent the valid form from sending a request to the server.
form.addEventListener("submit", function (event) {
  event.preventDefault();

  message.textContent =
    "Your form passed validation. This is a demo only; " +
    "no account was created and no information was sent.";
});

// Clear the previous message when the user edits the form.
form.addEventListener("input", function () {
  message.textContent = "";
});

// Enable the form after the submission handler is ready.
fields.disabled = false;

// There is no login page for this imaginary service.
loginLink.addEventListener("click", function (event) {
  event.preventDefault();

  message.textContent =
    "This is a demo only. There is no login page.";
});

// Access all input fields and the form button
const form = document.getElementById("registerForm");
const submitBtn = document.getElementById("submitBtn");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Optional: simple helper function for showing error messages
function showMessage(message, type = "error") {
  const existing = document.querySelector(".form-message");
  if (existing) existing.remove();

  const msg = document.createElement("p");
  msg.textContent = message;
  msg.className = `form-message ${type}`;
  msg.style.color = type === "error" ? "red" : "green";
  msg.style.textAlign = "center";
  msg.style.fontSize = "14px";
  form.appendChild(msg);
}

// Add event listener to the button (prevent default form reload)
submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // stop form from refreshing

  // Get trimmed input values
  const firstname = firstName.value.trim();
  const lastname = lastName.value.trim();
  const userEmail = email.value.trim();
  const userPassword = password.value.trim();
  const confirmPass = confirmPassword.value.trim();

  // Validation starts
  if (!firstname || !lastname || !userEmail || !userPassword || !confirmPass) {
    showMessage("All fields are required!");
    return;
  }

  // Basic name validation (length check only)
  if (firstname.length < 2 || lastname.length < 2) {
    showMessage("Firstname and Lastname must be at least 2 characters long!");
    return;
  }

// Enhanced Email validation (without regex)
if (
  !userEmail || // empty check
  !userEmail.includes("@") ||
  !userEmail.includes(".")
) {
  showMessage("Please enter a valid email address!");
  return;
}

// Trim spaces
userEmail = userEmail.trim();

const atIndex = userEmail.indexOf("@");
const dotIndex = userEmail.lastIndexOf(".");

// Structural checks
if (
  atIndex < 1 ||                                // something before @
  dotIndex < atIndex + 2 ||                     // . must come after @
  dotIndex === userEmail.length - 1 ||          // . cannot be last
  userEmail.split("@").length - 1 > 1 ||        // only one @ allowed
  userEmail.includes(" ") ||                    // no spaces allowed
  dotIndex - atIndex < 3                        // domain must have at least 2 chars
) {
  showMessage("Please enter a valid email address!");
  return;
}

// Passed all checks
console.log("Email is valid!");


  // Password length validation
  if (userPassword.length < 6) {
    showMessage("Password must be at least 6 characters long!");
    return;
  }

  // Confirm password match
  if (userPassword !== confirmPass) {
    showMessage("Passwords do not match!");
    return;
  }

  // If everything passes
  showMessage("Registration successful!", "success");
  console.log({
    firstname,
    lastname,
    email: userEmail,
    password: userPassword,
  });
});

/**********************************************
 * Verification + Validation + Authentication + Authorization
 **********************************************/

// Mock "Database" (temporary storage)
const mockDB = [];

/********** 1️⃣ VERIFICATION **********/
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const dashboard = document.getElementById("dashboard");
const authMsg = document.getElementById("authMsg");

if (!signupForm || !loginForm) {
  console.error("❌ Verification Failed: Missing form elements in DOM!");
} else {
  console.log("✅ Verification Passed: Forms detected.");
}

/********** 2️⃣ VALIDATION (Client-Side) **********/

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;

  // Regex patterns
  const emailRegex = /^[\\w.-]+@[a-zA-Z]+\\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;

  // Username validation
  if (username.length < 3) {
    document.getElementById("usernameError").textContent = "Username too short!";
    valid = false;
  } else {
    document.getElementById("usernameError").textContent = "";
  }

  // Email validation
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format!";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must include 1 uppercase, 1 number, 1 special character, and min 8 chars!";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Role validation
  if (!role) {
    document.getElementById("roleError").textContent = "Please select a role!";
    valid = false;
  } else {
    document.getElementById("roleError").textContent = "";
  }

  if (valid) {
    console.log("✅ Validation Passed: User Data is valid.");

    // Mock "Backend" Save (Authentication simulation)
    const userExists = mockDB.find((u) => u.email === email);
    if (userExists) {
      alert("User already exists. Please login!");
      return;
    }

    mockDB.push({ username, email, password, role });
    alert("✅ Registration Successful! You can now login.");
    signupForm.reset();
  }
});

/********** 3️⃣ AUTHENTICATION **********/

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const msg = document.getElementById("loginMsg");

  const foundUser = mockDB.find((user) => user.email === email);

  if (!foundUser) {
    msg.textContent = "❌ No user found with this email.";
    msg.style.color = "red";
    return;
  }

  if (foundUser.password !== password) {
    msg.textContent = "❌ Incorrect password.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "✅ Login Successful!";
  msg.style.color = "green";
  console.log("Authenticated User:", foundUser);

  // Proceed to Authorization
  authorizeUser(foundUser);
});

/********** 4️⃣ AUTHORIZATION **********/

function authorizeUser(user) {
  dashboard.classList.remove("hidden");

  if (user.role === "admin") {
    authMsg.innerHTML = `
      👑 Hello <b>${user.username}</b>! You are logged in as <b>Admin</b>.<br>
      You have permission to view, edit, and delete users.
    `;
  } else {
    authMsg.innerHTML = `
      🙋‍♂️ Hello <b>${user.username}</b>! You are logged in as a <b>Normal User</b>.<br>
      You can view your profile and update your information.
    `;
  }
}

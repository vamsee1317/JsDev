// 🏢 Real-World Examples of String Methods in Production

// 1. toUpperCase() / toLowerCase()
// 🔍 Normalize user search input before comparing
function normalizeSearch(query, productName) {
  return productName.toLowerCase().includes(query);
}
console.log(normalizeSearch("iphone", "apple iphone 15")); // true
console.log(normalizeSearch("Lenovo", "Lenovo i5"));


// 2. indexOf() / lastIndexOf()
// 📧 Validate email format (must contain '@')
function validateEmail(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid email: missing '@'";
  }
  return "Valid email";
}
console.log(validateEmail("testgmail.com")); // Invalid


// 3. slice() / substring() / substr()
// 📂 Extract file extension
function getFileExtension(filename) {
  return filename.slice(filename.lastIndexOf(".") + 1);
}
console.log(getFileExtension("resume.pdf.pdf")); // pdf


// 4. replace()
// 📞 Format phone numbers
function formatPhone(number) {
  return number.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}
console.log(formatPhone("9876543210")); // (987) 654-3210

// without using regex

function formatPhoneNumber(number) {
  // Ensure the input is a string
  number = number.toString();

  let areaCode = number.slice(0, 3);
  let middle = number.slice(3, 6);
  let last = number.slice(6);

  return `(${areaCode}) ${middle}-${last}`;
}

console.log(formatPhoneNumber("9876543210")); // (987) 654-3210


// without using regex

function aadharFormat(number) {
  // Ensure the input is a string
  number = number.toString();

  let first = number.slice(0, 4);
  let middle = number.slice(4, 8);
  let last = number.slice(8);

  return `${first} ${middle} ${last}`;
}

console.log(aadharFormat("502965626997")); // (987) 654-3210



// 5. trim()
// 📝 Clean up user input before saving
let rawUsername = "   JohnDoe   ";
console.log(rawUsername.trim()); // "JohnDoe"


// 6. charAt() / charCodeAt()
// 🔑 Password must not start with a number
function checkPassword(password) {
  if (!isNaN(password.charAt(0))) {
    return "❌ Password cannot start with a number!";
  }
  return "✅ Password looks good.";
}
console.log(checkPassword("123Hello")); // ❌


// 7. includes()
// 🔐 Check if text contains forbidden words
function containsForbiddenWord(comment) {
  return comment.toLowerCase().includes("spam");
}
console.log(containsForbiddenWord("Buy this now SPAM offer!")); // true


// 8. startsWith() / endsWith()
// 📂 Validate uploaded file type
function isImage(fileName) {
  return fileName.endsWith(".png") || fileName.endsWith(".jpg") || fileName.endsWith(".webp");
}
console.log(isImage("logo.png")); // true
console.log(isImage("document.pdf")); // false


// 9. repeat()
// 🔒 Mask sensitive information (credit card)
function maskCard(cardNumber) {
  return "**** **** **** " + cardNumber.slice(-4);
}
console.log(maskCard("4111111111111234")); // **** **** **** 1234


// 10. Template Literals (Backticks)
// 📧 Generate dynamic email message
let user = "Alice";
let orderId = 98765;
let email = `Hello ${user}, your order #${orderId} has been shipped!`;
console.log(email);


// 11. Multi-line strings with template literals
let terms = `
Terms & Conditions:
1. No spamming
2. Respect other users
3. Follow community rules
`;
console.log(terms);

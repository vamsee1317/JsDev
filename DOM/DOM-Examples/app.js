const titleDescription = document.getElementById("titleDesc");
const button = document.getElementById("button");
const emailInput = document.getElementById("emailInput");
const message = document.getElementById("message");

// Helpers
function getSubscriptions() {
  return JSON.parse(localStorage.getItem("subscribedEmails")) || [];
}

function saveSubscriptions(emails) {
  localStorage.setItem("subscribedEmails", JSON.stringify(emails));
}

function emailExists(email) {
  const emails = getSubscriptions();
  return emails.includes(email);
}

// Toggle subscription
function toggleSubscription() {
  const email = emailInput.value.trim();

  if (button.innerText === "Subscribe") {
    // Subscribe flow
    if (email === "") {
      message.style.color = "red";
      message.innerText = "Please enter your email!";
      return;
    }

    if (emailExists(email)) {
      message.style.color = "red";
      message.innerText = `${email} is already subscribed!`;
      return;
    }

    const emails = getSubscriptions();
    emails.push(email);
    saveSubscriptions(emails);

    titleDescription.innerText = `Welcome to the Channel, ${email}`;
    button.innerText = "Unsubscribe";
    button.style.backgroundColor = "green";
    message.style.color = "green";
    message.innerText = `${email} subscribed successfully!`;
    emailInput.disabled = true;

  } else {
    // Unsubscribe flow
    const email = emailInput.value.trim();
    let emails = getSubscriptions();
    emails = emails.filter(e => e !== email);
    saveSubscriptions(emails);

    resetUI();
    message.style.color = "red";
    message.innerText = `${email} has been unsubscribed.`;
  }
}

// Reset UI to initial state
function resetUI() {
  titleDescription.innerText = "Have you Subscribed?";
  button.innerText = "Subscribe";
  button.style.backgroundColor = "tomato";
  emailInput.disabled = false;
  emailInput.value = "";
  message.innerText = "";
}

// Always reset UI on page load
window.onload = () => {
  resetUI();
};



// Cube Calculator : 

function cubeCalculator(){
    const inputNumber = document.getElementById("inputNumber").value;
    const result = document.getElementById("result");
    

    if(inputNumber ===""){
        alert("Please enter number");
    }else{
        const output = inputNumber * inputNumber * inputNumber;
        result.value = output;

    }


}

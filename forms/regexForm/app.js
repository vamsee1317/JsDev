// Validation Patterns
const inp_field = {
  firstName: /^[A-Z][a-z]{4,15}$/,
  username: /^[a-z0-9]{5,12}$/i,
  email: /^([a-z\d._-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,15}$/,
  telephone: /^[6-9][0-9]{9}$/,
  aadharCardNumber : /^[2-9][0-9]{3} [0-9]{4} [0-9]{4}$/,
  panCard: /^[A-Z]{5}\d{4}[A-Z]$/
};

// Validation Function
const validate = (field, regex) => {
  if (regex.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
};

// Attach Events
let inputs = document.querySelectorAll('input');
inputs.forEach(item => {
  item.addEventListener('keyup', e => {
    validate(e.target, inp_field[e.target.name]);
  });
});

// Submit Handling
document.getElementById('userForm').addEventListener('submit', e => {
  e.preventDefault();
  let allValid = true;

  inputs.forEach(input => {
    const pattern = inp_field[input.name];
    if (!pattern.test(input.value)) {
      input.className = 'invalid';
      allValid = false;
    }
  });

  if (allValid) {
    alert('✅ Form is valid! Ready to send data to the server.');
    // Here you can send data using fetch() or axios if backend is ready
  } else {
    alert('⚠️ Please correct highlighted fields before submitting.');
  }
});

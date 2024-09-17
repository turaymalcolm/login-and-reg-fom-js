document.addEventListener('DOMContentLoaded', function() {
  const registrationForm = document.getElementById('registrationForm');
  const loginForm = document.getElementById('loginForm');

  // Registration form validation
  if (registrationForm) {
      registrationForm.addEventListener('submit', function(event) {
          let isValid = true;

          // Clear previous errors
          clearErrors();

          // Validate Name
          const name = document.getElementById('name');
          if (name.value.trim() === '') {
              showError('nameError', 'Name is required');
              isValid = false;
          }

          // Validate Email
          const email = document.getElementById('email');
          if (!validateEmail(email.value)) {
              showError('emailError', 'Invalid email format');
              isValid = false;
          }

          // Validate Password
          const password = document.getElementById('password');
          if (password.value.length < 8) {
              showError('passwordError', 'Password must be at least 8 characters long');
              isValid = false;
          }

          // Validate Confirm Password
          const confirmPassword = document.getElementById('confirmPassword');
          if (password.value !== confirmPassword.value) {
              showError('confirmPasswordError', 'Passwords do not match');
              isValid = false;
          }

          // Validate Age
          const age = document.getElementById('age');
          if (age.value < 18 || age.value > 100) {
              showError('ageError', 'you must be between 18 ');
              isValid = false;
          }

          // Validate Gender
          const gender = document.querySelector('input[name="gender"]:checked');
          if (!gender) {
              showError('genderError', 'Please select a gender');
              isValid = false;
          }

          // Validate Country
          const country = document.getElementById('country');
          if (country.value === '') {
              showError('countryError', 'Please select a country');
              isValid = false;
          }

          // Validate Terms and Conditions
          const terms = document.getElementById('terms');
          if (!terms.checked) {
              showError('termsError', 'You must agree to the terms and conditions');
              isValid = false;
          }

          if (!isValid) {
              event.preventDefault();
          }
          
      });
  }

  // Login form validation
  if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
          let isValid = true;

          // Clear previous errors
          clearErrors();

          // Validate Email
          const loginEmail = document.getElementById('loginEmail');
          if (!validateEmail(loginEmail.value)) {
              showError('loginEmailError', 'Invalid email format');
              isValid = false;
          }

          // Validate Password
          const loginPassword = document.getElementById('loginPassword');
          if (loginPassword.value.trim() === '') {
              showError('loginPasswordError', 'Password is required');
              isValid = false;
          }

          if (!isValid) {
              event.preventDefault();
          }
      });
  }

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }

  function showError(id, message) {
      document.getElementById(id).textContent = message;
  }

  function clearErrors() {
      const errorElements = document.querySelectorAll('.error');
      errorElements.forEach(element => element.textContent = '');
  }
});

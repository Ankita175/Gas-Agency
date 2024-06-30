const form = document.getElementById('registration-form');
const message = document.getElementById('registration-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Basic validation
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const email = document.getElementById('email').value;

  if (password !== confirmPassword) {
    message.textContent = 'Passwords do not match.';
    return; // Stop execution if passwords don't match
  }

  // Email validation (basic check)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    message.textContent = 'Please enter a valid email address.';
    return;
  }

  // Additional validation can be added here (e.g., name format, phone number pattern)

  // Simulate form submission (replace with actual submission logic)
  message.textContent = 'Registration successful!';
  message.style.color = 'green'; // Change to green for success message

  // Clear the form after successful submission (optional)
  form.reset();
});

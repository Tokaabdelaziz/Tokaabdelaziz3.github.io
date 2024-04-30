const form = document.getElementById('feedback-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Simulate sending data to server (replace with actual submission logic)
  console.log('Submitting feedback...');

  successMessage.style.display = 'block';
  form.reset(); // Reset form after successful submission
});

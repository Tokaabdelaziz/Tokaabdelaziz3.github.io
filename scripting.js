const form = document.getElementById('feedback-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  
  console.log('Submitting feedback...');

  successMessage.style.display = 'block';
  form.reset(); 
});


document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    document.getElementById("success-message").style.display = "block";
    
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Example validation (you can add more complex validation if needed)
  if (name && email && message) {
      document.getElementById('formMessage').textContent = 'Thank you for your message, ' + name + '!';
      // Here you can add code to send the form data to your server or email
      document.getElementById('contactForm').reset();
  } else {
      document.getElementById('formMessage').textContent = 'Please fill out all fields.';
      document.getElementById('formMessage').style.color = 'red';
  }
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission (page reload)

    // You can add validation logic here
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (firstName && lastName && email && message) {
        alert('Message sent successfully!');
      
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
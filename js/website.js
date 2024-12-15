// JavaScript file for login page

// Select the submit button
const submitBtn = document.querySelector('.btn');

// Add event listener for form submission
submitBtn.addEventListener('click', (event) => {
    // Prevent the default form submission
    event.preventDefault();
    
    // Handle form submission logic here
    // For example, you might want to validate the form inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (username && password) {
        // Simulate form submission or call an API
        alert('Form submitted successfully');
        // You might want to actually submit the form here
        // e.g., form.submit();
    } else {
        alert('Please fill in both fields');
    }
});

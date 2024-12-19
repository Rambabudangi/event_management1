document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user exists
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';
        localStorage.setItem('loggedInEmail', email);
        setTimeout(function() {
            window.location.href = 'dashboard.html'; // Replace with the actual path to your dashboard page
        }, 1); // Redirect after 1 second
    
    } else {
        document.getElementById('message').textContent = 'Invalid email or password!';
        document.getElementById('message').style.color = 'red';
    }
});
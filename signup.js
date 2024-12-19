document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        document.getElementById('message').textContent = 'Passwords do not match!';
        document.getElementById('message').style.color = 'red';
        return;
    }

    // Check if email already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.email === email)) {
        document.getElementById('message').textContent = 'Email already exists!';
        document.getElementById('message').style.color = 'red';
        return;
    }

    // Save user details in local storage
    users.push({ name, email, phone, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Show success message
    document.getElementById('message').textContent = 'Signup successful!';
    document.getElementById('message').style.color = 'green';

    // Clear form
    document.getElementById('signupForm').reset();
    setTimeout(function() {
            window.location.href = 'home.html'; // Replace with the actual path to your dashboard page
        }, 1); // Redirect after 1 second
});
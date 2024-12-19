const loggedInEmail = localStorage.getItem('loggedInEmail');

if (!loggedInEmail) {
    window.location.href = 'login.html';  // Redirect to login if no user is logged in
}

// Retrieve user details from localStorage based on email
const users = JSON.parse(localStorage.getItem('users')) || [];
const loggedInUser = users.find(user => user.email === loggedInEmail);

if (loggedInUser) {
    // Display user details
    document.getElementById('name').value = loggedInUser.name;
    document.getElementById('email').value = loggedInUser.email;
    document.getElementById('phone').value = loggedInUser.phone || '';
    document.getElementById('profilePicPreview').src = loggedInUser.profilePic || 'default-profile.jpg';
} else {
    document.getElementById('message').textContent = 'User not found';
}

// Function to preview and upload profile picture
document.getElementById("profile-pic").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            document.getElementById("profilePicPreview").src = reader.result;
            if (loggedInUser) {
                loggedInUser.profilePic = reader.result;
                localStorage.setItem('users', JSON.stringify(users));  // Update profile picture in localStorage
            }
        };
        reader.readAsDataURL(file);
    }
});

// Enable editing of phone number and feedback
function editProfile() {
    document.getElementById("phone").disabled = false;
    document.getElementById("feedback").disabled = false;
    document.getElementById("name").disabled = false;
}

// Save updated profile information
function saveChanges() {
    const phone = document.getElementById("phone").value;
    const feedback = document.getElementById("feedback").value;
    const name = document.getElementById("name").value;

    if (loggedInUser) {
        loggedInUser.phone = phone;
        loggedInUser.feedback = feedback;
        loggedInUser.name = name;
        localStorage.setItem('users', JSON.stringify(users));  // Save updated user details to localStorage
        document.getElementById('message').textContent = 'Changes saved successfully!';
    } else {
        document.getElementById('message').textContent = 'Unable to save changes. Please log in first.';
    }
}
// Toggle visibility of each section based on the button click

// View Bookings Section
document.getElementById('view-bookings-btn').addEventListener('click', function() {
    var viewBookings = document.getElementById('view-bookings');
    viewBookings.style.display = (viewBookings.style.display === 'none' || viewBookings.style.display === '') ? 'block' : 'none';
});

// Manage Requests Section
document.getElementById('manage-requests-btn').addEventListener('click', function() {
    var manageRequests = document.getElementById('manage-requests');
    manageRequests.style.display = (manageRequests.style.display === 'none' || manageRequests.style.display === '') ? 'block' : 'none';
});

// Payment Status Section
document.getElementById('payment-status-btn').addEventListener('click', function() {
    var paymentStatus = document.getElementById('payment-status');
    paymentStatus.style.display = (paymentStatus.style.display === 'none' || paymentStatus.style.display === '') ? 'block' : 'none';
});

// Attendee List Section
document.getElementById('attendee-list-btn').addEventListener('click', function() {
    var attendeeList = document.getElementById('attendee-list');
    attendeeList.style.display = (attendeeList.style.display === 'none' || attendeeList.style.display === '') ? 'block' : 'none';
});

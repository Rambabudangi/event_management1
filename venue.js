// Toggle visibility of each section based on the button click

// Add Venue Section
document.getElementById('add-venue-btn').addEventListener('click', function() {
    var addVenue = document.getElementById('add-venue');
    addVenue.style.display = (addVenue.style.display === 'none' || addVenue.style.display === '') ? 'block' : 'none';
});

// Check Availability Section
document.getElementById('check-availability-btn').addEventListener('click', function() {
    var checkAvailability = document.getElementById('check-availability');
    checkAvailability.style.display = (checkAvailability.style.display === 'none' || checkAvailability.style.display === '') ? 'block' : 'none';
});

// Venue Reservations Section
document.getElementById('venue-reservations-btn').addEventListener('click', function() {
    var venueReservations = document.getElementById('venue-reservations');
    venueReservations.style.display = (venueReservations.style.display === 'none' || venueReservations.style.display === '') ? 'block' : 'none';
});

// Handle adding new venue
document.getElementById('venue-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the values from the form
    const venueName = document.getElementById('venue-name').value;
    const venueLocation = document.getElementById('venue-location').value;
    const venueCapacity = document.getElementById('venue-capacity').value;
    const venueAvailability = document.getElementById('venue-availability').value;

    // Create a new row for the venue
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>1</td>
        <td>${venueName}</td>
        <td>${venueLocation}</td>
        <td>${venueCapacity}</td>
        <td>${venueAvailability}</td>
    `;

    // Add the row to a list of venues (this could be dynamically managed in the real world)
    document.getElementById('reservation-list').appendChild(newRow);

    // Clear the form
    document.getElementById('venue-form').reset();
});

// Handle check availability
document.getElementById('check-availability-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the date from the form
    const checkDate = document.getElementById('check-date').value;

    // Placeholder availability check (you can implement more complex logic here)
    const availabilityStatus = document.getElementById('availability-status');
    
    // For now, we assume all venues are available
    availabilityStatus.textContent = `The venue is available on ${checkDate}.`;

    // Reset the form after checking
    document.getElementById('check-availability-form').reset();
});

// Example venue reservations data
const reservationsData = [
    { id: 1, venueName: 'Grand Hall', reservationDate: '2024-12-20', clientName: 'John Doe', status: 'Confirmed' },
    { id: 2, venueName: 'Beachside Venue', reservationDate: '2024-12-25', clientName: 'Jane Smith', status: 'Pending' }
];

// Populate reservations section dynamically
const reservationList = document.getElementById('reservation-list');
reservationsData.forEach(reservation => {
    const reservationRow = document.createElement('tr');
    reservationRow.innerHTML = `
        <td>${reservation.id}</td>
        <td>${reservation.venueName}</td>
        <td>${reservation.reservationDate}</td>
        <td>${reservation.clientName}</td>
        <td>${reservation.status}</td>
    `;
    reservationList.appendChild(reservationRow);
});

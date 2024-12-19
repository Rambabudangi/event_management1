
document.getElementById('add-client-btn').addEventListener('click', function() {
    var addClient = document.getElementById('add-client');
    addClient.style.display = (addClient.style.display === 'none' || addClient.style.display === '') ? 'block' : 'none';
});

document.getElementById('manage-client-btn').addEventListener('click', function() {
    var manageClient = document.getElementById('manage-client');
    manageClient.style.display = (manageClient.style.display === 'none' || manageClient.style.display === '') ? 'block' : 'none';
});

document.getElementById('feedback-btn').addEventListener('click', function() {
    var feedback = document.getElementById('feedback');
    feedback.style.display = (feedback.style.display === 'none' || feedback.style.display === '') ? 'block' : 'none';
});

document.getElementById('client-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const clientName = document.getElementById('client-name').value;
    const clientEmail = document.getElementById('client-email').value;
    const clientPhone = document.getElementById('client-phone').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>1</td>
        <td>${clientName}</td>
        <td>${clientEmail}</td>
        <td>${clientPhone}</td>
        <td><button onclick="removeClient(this)">Remove</button></td>
    `;

    document.getElementById('client-list').appendChild(newRow);

    document.getElementById('client-form').reset();
});

function removeClient(button) {
    const row = button.closest('tr');
    row.remove();
}

const feedbackData = [
    { name: 'John Doe', feedback: 'Great service! Highly recommend.' },
    { name: 'Jane Smith', feedback: 'Very helpful and responsive team.' }
];

const feedbackList = document.getElementById('feedback-list');
feedbackData.forEach(item => {
    const feedbackRow = document.createElement('tr');
    feedbackRow.innerHTML = `
        <td>${item.name}</td>
        <td>${item.feedback}</td>
    `;
    feedbackList.appendChild(feedbackRow);
});

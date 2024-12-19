// Toggle visibility of each section based on the button click

// Add Vendor Section
document.getElementById('add-vendor-btn').addEventListener('click', function() {
    var addVendor = document.getElementById('add-vendor');
    addVendor.style.display = (addVendor.style.display === 'none' || addVendor.style.display === '') ? 'block' : 'none';
});

// Manage Vendors Section
document.getElementById('manage-vendor-btn').addEventListener('click', function() {
    var manageVendor = document.getElementById('manage-vendor');
    manageVendor.style.display = (manageVendor.style.display === 'none' || manageVendor.style.display === '') ? 'block' : 'none';
});

// Vendor Contracts Section
document.getElementById('vendor-contracts-btn').addEventListener('click', function() {
    var vendorContracts = document.getElementById('vendor-contracts');
    vendorContracts.style.display = (vendorContracts.style.display === 'none' || vendorContracts.style.display === '') ? 'block' : 'none';
});

// Services Section
document.getElementById('services-btn').addEventListener('click', function() {
    var services = document.getElementById('services');
    services.style.display = (services.style.display === 'none' || services.style.display === '') ? 'block' : 'none';
});

// Handle adding new vendor
document.getElementById('vendor-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the values from the form
    const vendorName = document.getElementById('vendor-name').value;
    const vendorEmail = document.getElementById('vendor-email').value;
    const vendorPhone = document.getElementById('vendor-phone').value;
    const vendorService = document.getElementById('vendor-service').value;

    // Create a new row for the vendor
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>1</td>
        <td>${vendorName}</td>
        <td>${vendorEmail}</td>
        <td>${vendorPhone}</td>
        <td>${vendorService}</td>
        <td><button onclick="removeVendor(this)">Remove</button></td>
    `;

    // Append the row to the vendor list table
    document.getElementById('vendor-list').appendChild(newRow);

    // Clear the form
    document.getElementById('vendor-form').reset();
});

// Function to remove a vendor
function removeVendor(button) {
    const row = button.closest('tr');
    row.remove();
}

// Example vendor contracts data
const contractsData = [
    { name: 'John Catering', contractDate: '2024-11-01', contractDetails: 'Catering for the Annual Meetup' },
    { name: 'Lighting Solutions', contractDate: '2024-12-10', contractDetails: 'Lighting setup for Conference' }
];

// Populate contract section dynamically
const contractList = document.getElementById('contract-list');
contractsData.forEach(item => {
    const contractRow = document.createElement('tr');
    contractRow.innerHTML = `
        <td>${item.name}</td>
        <td>${item.contractDate}</td>
        <td>${item.contractDetails}</td>
    `;
    contractList.appendChild(contractRow);
});

// Example services data
const servicesData = [
    { service: 'Catering', description: 'Providing food and beverages for events' },
    { service: 'Lighting', description: 'Setting up lighting for events' },
    { service: 'Decoration', description: 'Decorating venues for events' }
];


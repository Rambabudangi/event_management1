// Toggle visibility of each section based on the button click

// Profile Settings Section
document.getElementById('profile-settings-btn').addEventListener('click', function() {
    const profileSettings = document.getElementById('profile-settings');
    profileSettings.style.display = (profileSettings.style.display === 'none' || profileSettings.style.display === '') ? 'block' : 'none';
});

// Notification Preferences Section
document.getElementById('notifications-btn').addEventListener('click', function() {
    const notificationPreferences = document.getElementById('notification-preferences');
    notificationPreferences.style.display = (notificationPreferences.style.display === 'none' || notificationPreferences.style.display === '') ? 'block' : 'none';
});

// Payment Gateways Section
document.getElementById('payment-gateways-btn').addEventListener('click', function() {
    const paymentGateways = document.getElementById('payment-gateways');
    paymentGateways.style.display = (paymentGateways.style.display === 'none' || paymentGateways.style.display === '') ? 'block' : 'none';
});

// System Configuration Section
document.getElementById('system-config-btn').addEventListener('click', function() {
    const systemConfig = document.getElementById('system-configuration');
    systemConfig.style.display = (systemConfig.style.display === 'none' || systemConfig.style.display === '') ? 'block' : 'none';
});

// Handle Profile Form Submission
document.getElementById('profile-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Profile saved successfully!');
    this.reset();
});

// Handle Notification Preferences Form Submission
document.getElementById('notification-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailNotif = document.getElementById('email-notifications').checked;
    const smsNotif = document.getElementById('sms-notifications').checked;
    alert(`Notification Preferences saved: \nEmail: ${emailNotif} \nSMS: ${smsNotif}`);
    this.reset();
});

// Handle Payment Gateway Form Submission
document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const gatewayName = document.getElementById('gateway-name').value;
    const gatewayApi = document.getElementById('gateway-api').value;
    alert(`Payment Gateway ${gatewayName} added successfully!`);
    this.reset();
});

// Handle System Configuration Form Submission
document.getElementById('system-config-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const siteName = document.getElementById('site-name').value;
    const timezone = document.getElementById('timezone').value;
    alert(`System Configuration saved: \nSite Name: ${siteName} \nTimezone: ${timezone}`);
    this.reset();
});

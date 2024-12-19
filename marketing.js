// Toggle visibility of each section based on the button click

// Send Invitations Section
document.getElementById('send-invitation-btn').addEventListener('click', function() {
    const invitationSection = document.getElementById('invitation-section');
    invitationSection.style.display = (invitationSection.style.display === 'none' || invitationSection.style.display === '') ? 'block' : 'none';
});

// Promotional Campaigns Section
document.getElementById('campaign-btn').addEventListener('click', function() {
    const campaignSection = document.getElementById('campaign-section');
    campaignSection.style.display = (campaignSection.style.display === 'none' || campaignSection.style.display === '') ? 'block' : 'none';
});

// Social Media Integration Section
document.getElementById('social-media-btn').addEventListener('click', function() {
    const socialMediaSection = document.getElementById('social-media-section');
    socialMediaSection.style.display = (socialMediaSection.style.display === 'none' || socialMediaSection.style.display === '') ? 'block' : 'none';
});

// Handle Invitation Form Submission
document.getElementById('invitation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const inviteName = document.getElementById('invite-name').value;
    const inviteEmail = document.getElementById('invite-email').value;
    const inviteEvent = document.getElementById('invite-event').value;

    const invitationRow = document.createElement('tr');
    invitationRow.innerHTML = `
        <td>${inviteName}</td>
        <td>${inviteEmail}</td>
        <td>${inviteEvent}</td>
    `;

    document.getElementById('invitation-list').appendChild(invitationRow);
    this.reset();
});

// Handle Campaign Form Submission
document.getElementById('campaign-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const campaignName = document.getElementById('campaign-name').value;
    const campaignDetails = document.getElementById('campaign-details').value;

    const campaignRow = document.createElement('tr');
    campaignRow.innerHTML = `
        <td>${campaignName}</td>
        <td>${campaignDetails}</td>
    `;

    document.getElementById('campaign-list').appendChild(campaignRow);
    this.reset();
});

// Handle Social Media Form Submission
document.getElementById('social-media-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const platform = document.getElementById('social-media-platform').value;
    const postContent = document.getElementById('social-media-post').value;

    const socialMediaRow = document.createElement('tr');
    socialMediaRow.innerHTML = `
        <td>${platform}</td>
        <td>${postContent}</td>
    `;

    document.getElementById('social-media-list').appendChild(socialMediaRow);
    this.reset();
});

// Toggle visibility of each section based on the button click

// Admin Panel Section
document.getElementById('view-users-btn').addEventListener('click', function() {
    const adminPanel = document.getElementById('admin-panel');
    adminPanel.style.display = (adminPanel.style.display === 'none' || adminPanel.style.display === '') ? 'block' : 'none';
});

// Role Assignments Section
document.getElementById('role-assign-btn').addEventListener('click', function() {
    const roleAssignmentSection = document.getElementById('role-assignment-section');
    roleAssignmentSection.style.display = (roleAssignmentSection.style.display === 'none' || roleAssignmentSection.style.display === '') ? 'block' : 'none';
});

// Access Permissions Section
document.getElementById('permissions-btn').addEventListener('click', function() {
    const permissionsSection = document.getElementById('permissions-section');
    permissionsSection.style.display = (permissionsSection.style.display === 'none' || permissionsSection.style.display === '') ? 'block' : 'none';
});

// Handle Admin Panel User Management
document.getElementById('user-list').innerHTML = `
    <tr>
        <td>1</td>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td><button>Edit</button><button>Delete</button></td>
    </tr>
    <tr>
        <td>2</td>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>Manager</td>
        <td><button>Edit</button><button>Delete</button></td>
    </tr>
`;

// Handle Role Assignment Form Submission
document.getElementById('role-assignment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const userId = document.getElementById('user-id').value;
    const role = document.getElementById('role').value;

    const roleRow = document.createElement('tr');
    roleRow.innerHTML = `
        <td>${userId}</td>
        <td>${role}</td>
    `;

    document.getElementById('role-list').appendChild(roleRow);
    this.reset();
});

// Handle Access Permissions Form Submission
document.getElementById('permissions-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const rolePermission = document.getElementById('role-permission').value;
    const permissions = document.getElementById('permissions').value;

    const permissionRow = document.createElement('tr');
    permissionRow.innerHTML = `
        <td>${rolePermission}</td>
        <td>${permissions}</td>
    `;

    document.getElementById('permissions-list').appendChild(permissionRow);
    this.reset();
});

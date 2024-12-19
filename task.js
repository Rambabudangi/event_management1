// Toggle visibility of each section based on the button click

// Assign Task Section
document.getElementById('assign-task-btn').addEventListener('click', function() {
    const assignTask = document.getElementById('assign-task');
    assignTask.style.display = (assignTask.style.display === 'none' || assignTask.style.display === '') ? 'block' : 'none';
});

// Task Status Section
document.getElementById('task-status-btn').addEventListener('click', function() {
    const taskStatus = document.getElementById('task-status');
    taskStatus.style.display = (taskStatus.style.display === 'none' || taskStatus.style.display === '') ? 'block' : 'none';
});

// Task Calendar Section
document.getElementById('task-calendar-btn').addEventListener('click', function() {
    const taskCalendar = document.getElementById('task-calendar');
    taskCalendar.style.display = (taskCalendar.style.display === 'none' || taskCalendar.style.display === '') ? 'block' : 'none';
});

// Handle Assigning Task
document.getElementById('assign-task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the values from the form
    const taskName = document.getElementById('task-name').value;
    const taskAssignee = document.getElementById('task-assignee').value;
    const taskDueDate = document.getElementById('task-due-date').value;

    // Create a new task entry
    const taskId = document.querySelectorAll('#task-list tr').length + 1; // Increment task ID
    const taskStatus = 'Pending'; // Default task status

    const newTaskRow = document.createElement('tr');
    newTaskRow.setAttribute('data-task-id', taskId);
    newTaskRow.innerHTML = `
        <td>${taskId}</td>
        <td>${taskName}</td>
        <td>${taskAssignee}</td>
        <td class="status">${taskStatus}</td>
        <td><button class="change-status">Mark as In Progress</button></td>
    `;

    // Add the new task to the task list
    document.getElementById('task-list').appendChild(newTaskRow);

    // Clear the form
    document.getElementById('assign-task-form').reset();
});

// Handle Task Status Update
document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('change-status')) {
        const taskRow = e.target.closest('tr');
        const statusCell = taskRow.querySelector('.status');
        const currentStatus = statusCell.textContent;

        // Toggle task status
        if (currentStatus === 'Pending') {
            statusCell.textContent = 'In Progress';
            e.target.textContent = 'Mark as Completed';
        } else if (currentStatus === 'In Progress') {
            statusCell.textContent = 'Completed';
            e.target.style.display = 'none'; // Hide the button once task is completed
        }
    }
});

// Populate Task Calendar with Tasks (example)
const tasks = [
    { taskName: 'Task 1', dueDate: '2024-12-10' },
    { taskName: 'Task 2', dueDate: '2024-12-15' },
    { taskName: 'Task 3', dueDate: '2024-12-20' }
];

// Generate Calendar for December 2024 (example month)
function generateCalendar() {
    const calendar = document.getElementById('calendar');
    const daysInMonth = 31;

    // Clear previous calendar if exists
    calendar.innerHTML = '';

    // Generate days
    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.textContent = i;

        // Check if any task is assigned to this date
        tasks.forEach(task => {
            const taskDate = new Date(task.dueDate);
            if (taskDate.getDate() === i) {
                dayDiv.classList.add('task');
                dayDiv.title = `Task: ${task.taskName}`;
            }
        });

        calendar.appendChild(dayDiv);
    }
}

// Initialize the calendar when the page loads
generateCalendar();

// Optional: Add a filter for task status (e.g., Pending, In Progress, Completed)
document.getElementById('filter-status').addEventListener('change', function() {
    const filterStatus = this.value;
    const allTasks = document.querySelectorAll('#task-list tr');

    allTasks.forEach(task => {
        const status = task.querySelector('.status').textContent;

        if (filterStatus === 'All' || status === filterStatus) {
            task.style.display = '';
        } else {
            task.style.display = 'none';
        }
    });
});

// Toggle visibility of each section based on the button click

// Budget Management Section
document.getElementById('budget-btn').addEventListener('click', function() {
    const budgetSection = document.getElementById('budget-section');
    budgetSection.style.display = (budgetSection.style.display === 'none' || budgetSection.style.display === '') ? 'block' : 'none';
});

// Expense Tracking Section
document.getElementById('expense-btn').addEventListener('click', function() {
    const expenseSection = document.getElementById('expense-section');
    expenseSection.style.display = (expenseSection.style.display === 'none' || expenseSection.style.display === '') ? 'block' : 'none';
});

// Payments Section
document.getElementById('payments-btn').addEventListener('click', function() {
    const paymentsSection = document.getElementById('payments-section');
    paymentsSection.style.display = (paymentsSection.style.display === 'none' || paymentsSection.style.display === '') ? 'block' : 'none';
});

// Invoice Section
document.getElementById('invoice-btn').addEventListener('click', function() {
    const invoiceSection = document.getElementById('invoice-section');
    invoiceSection.style.display = (invoiceSection.style.display === 'none' || invoiceSection.style.display === '') ? 'block' : 'none';
});

// Handle Budget Form Submission
document.getElementById('budget-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const budgetName = document.getElementById('budget-name').value;
    const budgetAmount = document.getElementById('budget-amount').value;

    const budgetRow = document.createElement('tr');
    budgetRow.innerHTML = `
        <td>${budgetName}</td>
        <td>${budgetAmount}</td>
    `;

    document.getElementById('budget-list').appendChild(budgetRow);
    this.reset();
});

// Handle Expense Form Submission
document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = document.getElementById('expense-amount').value;
    const expenseCategory = document.getElementById('expense-category').value;

    const expenseRow = document.createElement('tr');
    expenseRow.innerHTML = `
        <td>${expenseName}</td>
        <td>${expenseAmount}</td>
        <td>${expenseCategory}</td>
    `;

    document.getElementById('expense-list').appendChild(expenseRow);
    this.reset();
});

// Handle Payment Form Submission
document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const paymentType = document.getElementById('payment-type').value;
    const paymentAmount = document.getElementById('payment-amount').value;
    const paymentDescription = document.getElementById('payment-description').value;

    const paymentRow = document.createElement('tr');
    paymentRow.innerHTML = `
        <td>${paymentType}</td>
        <td>${paymentAmount}</td>
        <td>${paymentDescription}</td>
    `;

    document.getElementById('payment-list').appendChild(paymentRow);
    this.reset();
});

// Handle Invoice Form Submission
document.getElementById('invoice-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const clientName = document.getElementById('invoice-client').value;
    const invoiceAmount = document.getElementById('invoice-amount').value;
    const invoiceDate = document.getElementById('invoice-date').value;

    const invoiceRow = document.createElement('tr');
    invoiceRow.innerHTML = `
        <td>${clientName}</td>
        <td>${invoiceAmount}</td>
        <td>${invoiceDate}</td>
    `;

    document.getElementById('invoice-list').appendChild(invoiceRow);
    this.reset();
});

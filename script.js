document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('user-form');
    const userTableBody = document.querySelector('#user-table tbody');

    userForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.getElementById('gender').value;
        const foodOptions = document.getElementById('food').selectedOptions;
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;

        // Validate at least 2 food options selected
        if (foodOptions.length < 2) {
            alert('Please select at least 2 food options.');
            return;
        }

        // Create a new table row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${Array.from(foodOptions).map(option => option.value).join(', ')}</td>
            <td>${state}</td>
            <td>${country}</td>
        `;

        // Append the new row to the table
        userTableBody.appendChild(newRow);

        // Clear form fields
        userForm.reset();
    });
});

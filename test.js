// Example test suite
const testContainer = document.createElement('div');
testContainer.id = 'test-container';

// Test 1: Check if form container exists
const test1 = document.createElement('p');
test1.textContent = `Test 1: Form container should exist`;
test1.style.color = document.querySelector('.container') ? 'green' : 'red';

// Test 2: Check if form fields are created correctly
const formFields = document.querySelectorAll('#user-form input, #user-form select');
const test2 = document.createElement('p');
test2.textContent = `Test 2: Form fields should be created`;
test2.style.color = formFields && formFields.length === 8 ? 'green' : 'red';

// Test 3: Check if table exists
const test3 = document.createElement('p');
test3.textContent = `Test 3: Table should exist`;
test3.style.color = document.getElementById('user-table') ? 'green' : 'red';

// Append tests to the test container
testContainer.appendChild(test1);
testContainer.appendChild(test2);
testContainer.appendChild(test3);

// Append the test container to the body
document.body.appendChild(testContainer);

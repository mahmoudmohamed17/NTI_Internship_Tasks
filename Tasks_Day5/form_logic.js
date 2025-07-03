let emailField = document.getElementById('email');
let nameField = document.getElementById('name');
let ageField = document.getElementById('age');
let submitBtn = document.getElementById('submit');
let resetBtn = document.getElementById('reset');

const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Z]{2,}\b/i;

submitBtn.addEventListener("click", () => {
    const email = emailField.value.trim();
    const name = nameField.value.trim();
    const age = ageField.value.trim();
    let errorsCount = 0;

    if (!email || !name || !age) {
        alert('Missing fields!');
        errorsCount++;
    }

    if (email && !emailRegex.test(email)) {
        alert('Invalid email, try again.');
        errorsCount++;
    }

    if (name && name < 3) {
        alert('Name must be at least 4 characters');
        errorsCount++;
    }
    
    const ageValue = parseInt(age);
    if (age && (isNaN(ageValue) || ageValue < 1 || ageValue > 120)) {
        alert('Age must be a number between 1 and 120.');
        errorsCount++;
    }

    if (errorsCount == 0) {
        alert('All data is valid!');
    }
});

resetBtn.addEventListener("click", () => {
    emailField.value = '';
    nameField.value = '';
    ageField.value = '';
});

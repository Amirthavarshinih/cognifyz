document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    document.querySelectorAll('.error').forEach(function(el) {
        el.textContent = '';
    });
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        isValid = false;
        document.getElementById('nameError').textContent = 'Name is required.';
    }
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i;
    if (email === '') {
        isValid = false;
        document.getElementById('emailError').textContent = 'Email is required.';
    } else if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Email is not valid.';
    }
    const password = document.getElementById('password').value.trim();
    if (password === '') {
        isValid = false;
        document.getElementById('passwordError').textContent = 'Password is required.';
    } else if (password.length < 6) {
        isValid = false;
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
    }
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        isValid = false;
        document.getElementById('messageError').textContent = 'Message is required.';
    }
    if (isValid) {
        console.log('Form submitted successfully!');
    }
});

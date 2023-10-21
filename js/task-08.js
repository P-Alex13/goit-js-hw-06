const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[name="email"]');
    const password = loginForm.querySelector('input[name="password"]');

    if (email.value === "" || password.value === "") {
        alert('Please enter a value!');
    } else {
        alert('The form has been successfully saved!');
        console.log(`This form has a username of: ${email.value} and a password: ${password.value}`);
    }
    email.value = "";
    password.value = "";
});
    
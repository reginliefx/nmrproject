document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    function validateInputs() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        const usernameValid = /^[a-zA-Z0-9]+$/.test(username);
        const passwordValid = password.length >= 6;

        if (!usernameValid && username.length > 0) {
            usernameError.classList.add('error-active');
        } else {
            usernameError.classList.remove('error-active');
        }

        if (!passwordValid && password.length > 0) {
            passwordError.classList.add('error-active');
        } else {
            passwordError.classList.remove('error-active');
        }

        loginButton.disabled = !(usernameValid && passwordValid);
    }

    usernameInput.addEventListener('input', validateInputs);
    passwordInput.addEventListener('input', validateInputs);

    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        if (!loginButton.disabled) {
            window.location.href = 'index.html';
        }
    });
});

document.getElementById('login-btn').addEventListener('click', function () {
    // email field validation 
    const emailField = document.getElementById('email-field');
    const emailFieldValue = emailField.value;

    // password field validation 
    const passField = document.getElementById('pass-field');
    const passFieldValue = passField.value;
    // console.log(passFieldValue)
    if (emailFieldValue === 'sontan' && passFieldValue === 'bap') {
        window.location.href = 'insideBank.html';
    }
    else {
        alert("wrong user")
    }
    // clear input value 
    emailField.value = '';
    passField.value = '';
})
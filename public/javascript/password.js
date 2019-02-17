/*
|==================================================================================|
|      In the box enter the new password. Js code for hiding/showing passwords     |
|==================================================================================|
*/
var pwd = document.getElementById('pwd');
var eye = document.getElementById('eye');

if (eye) {
    eye.addEventListener('click', () => {
        eye.classList.toggle('active');
        (pwd.type == 'password') ? pwd.type = 'text': pwd.type = 'password';
    });
}


/*
|==================================================================================|
|    Re-enter the new password in the box. Js code for hiding/showing passwords    |
|==================================================================================|
*/
var pwdTwo = document.getElementById('pwdTwo');
var eyeTwo = document.getElementById('eyeTwo');

if(eyeTwo) {
    eyeTwo.addEventListener('click', () => {
        eyeTwo.classList.toggle('active');
        (pwdTwo.type == 'password') ? pwdTwo.type = 'text': pwdTwo.type = 'password';
    });
}



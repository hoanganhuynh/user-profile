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
|             Confirm-password in the box. Js code for hiding/showing passwords    |
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
/*
|==================================================================================|
|                          CHECKING CONFIRM-PASSWORD                               |
|==================================================================================|
*/


var check = function() {
    if (document.getElementById('pwd').value == document.getElementById('pwdTwo').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'Mật khẩu khớp';
    } else {
            document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Mật khẩu chưa trùng khớp!';
    }
}


function validateForm()
{
    
    var newPwd = document.getElementById('pwd').value;
    var againPwd = document.getElementById('pwdTwo').value;
 
    // Kiểm tra dữ liệu hợp lệ hay không
    if (newPwd == ''){
        alert('Bạn chưa điền mật khẩu');
    }
    else if (againPwd == '')
    {
        alert('Nhập lại mật khẩu mới');
    }
    else{
        alert('Dữ liệu hợp lệ, ta có thể chấp nhận submit form');
        return true;
    }
 
    return false;
}




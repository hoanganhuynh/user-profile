function validateName() {
    
    var newName = document.getElementById('name').value;
    // Kiểm tra dữ liệu hợp lệ hay không
    if (newName == ''){
        alert('Tên không thể để trống !');
    }
    else{
        alert('Dữ liệu hợp lệ, ta có thể chấp nhận submit form');
        return true;
    }
    // return false;
}
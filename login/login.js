document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Lấy giá trị từ các trường nhập
        var username = loginForm.querySelector('input[placeholder="Username"]').value;
        var password = loginForm.querySelector('input[placeholder="Password"]').value;

        // Lấy danh sách người dùng từ Local Storage (nếu có)
        var userArray = JSON.parse(localStorage.getItem("userArray")) || [];

        // Kiểm tra thông tin đăng nhập
        var isLoggedIn = false;
        for (var i = 0; i < userArray.length; i++) {
            if (username === userArray[i].username && password === userArray[i].password) {
                isLoggedIn = true;
                break;
            }
        }

        if (isLoggedIn) {
            alert('Đăng nhập thành công');
            // Chuyển hướng đến trang index.html
            window.location.href = '/index.html';
        } else {
            alert('Đăng nhập không thành công');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var signUpForm = document.getElementById('registrationForm');

    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Lấy giá trị từ các trường nhập
        var username = signUpForm.querySelector('input[placeholder="Username"]').value;
        var password = signUpForm.querySelector('input[placeholder="Password"]').value;
        var email = signUpForm.querySelector('input[placeholder="Email Address"]').value;

        // Lấy danh sách người dùng từ Local Storage (nếu có)
        var userArray = JSON.parse(localStorage.getItem("userArray")) || [];

        // Thêm người dùng mới vào danh sách
        userArray.push({
            username: username,
            password: password,
            email: email
        });

        // Lưu danh sách người dùng mới vào Local Storage
        localStorage.setItem("userArray", JSON.stringify(userArray));

        alert('Đăng ký thành công');
        
        window.location.href = '/login/login.html';
    });
});

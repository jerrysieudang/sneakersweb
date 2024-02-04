document.getElementById('buttonCheckout').addEventListener('click', function() {
    // Lấy giá trị từ các trường nhập liệu
    var fullName = document.getElementById('name').value;
    var phoneNumber = document.getElementById('phone').value;
    var userAddress = document.getElementById('address').value;

    // Tạo một đối tượng chứa dữ liệu
    var userData = {
        fullName: fullName,
        phoneNumber: phoneNumber,
        address: userAddress
        //Thêm các trường khác nếu cần
    };

    // Chuyển đổi đối tượng thành chuỗi JSON và lưu vào localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Hiển thị thông báo hoặc chuyển hướng trang nếu cần
    alert('Đã xác nhận đơn hàng thành công');
});
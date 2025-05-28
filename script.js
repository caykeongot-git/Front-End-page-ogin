document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        let rememberMe = document.getElementById("rememberMe");

        if (!rememberMe.checked) {
            event.preventDefault();
            alert("Bạn phải chọn 'Remember me' để đăng nhập!");
        }
    });
});

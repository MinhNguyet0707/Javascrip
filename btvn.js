
// Kiểm tra xem password và confirm pass có trùng nhau hay không
let form = document.querySelector('#registrationForm');
let passwordInput = document.querySelector('#password');
let confirmPasswordInput = document.querySelector('#confirmPassword');
form.addEventListener('submit', function (event) {
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert('mât khẩu không trùng khớp vui lòng nhập lại');

    } else {
        alert('nhập thành công')
    }
});
// Đảm bảo nút ‘Đăng ký’ bị disable cho đến khi người dùng nhập dữ liệu hợp lệ vào tất cả các trường đầu vào.
//// Khi user nhập đủ thông tin hợp lệ và bấm vào nút submit thì tạo 1 hộp thoại thông báo đăng ký thành công
let usernameInput = document.querySelector('#username');
let passwordInput1 = document.querySelector('#password');
let confirmPasswordInput1 = document.querySelector('#confirmPassword');
function checkDisable() {
    let isUsernameValid = usernameInput.value.trim() !== '';
    let isPasswordValid = passwordInput1.value.trim() !== '';
    let isConfirmPasswordValid = confirmPasswordInput1.value.trim() !== '';
    return isUsernameValid && isPasswordValid && isConfirmPasswordValid;
}

if (checkDisable() == false) {
    document.querySelector('#btn').style.display = 'none';
} else {
    document.querySelector('#btn').style.display = 'block';
}

let passwordInput2 = document.querySelector('#password');
let confirmPasswordInput2 = document.querySelector('#confirmPassword');
let form1 = document.querySelector('#registrationForm');
form1.addEventListener('submit', (event) => {
    if (passwordInput2.value !== confirmPasswordInput2.value) {
        alert('vui lòng nhâp lại');
        event.preventDefault();
        return;
    }

    if (checkDisable()) {
        alert('đăng nhập thành công');
    } else {
        alert('vui lòng thử lại');
        event.preventDefault();
    }
});




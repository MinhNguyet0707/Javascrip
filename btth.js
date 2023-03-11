// <!-- Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
let a=document.getElementById('heading');
a.style.color='red';
a.textContent.toUpperCase();

// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
let b=document.querySelectorAll('.para');
b.forEach(ele =>{
    ele.style.color='blue';
    ele.style.fontSize='20px'
});

// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
let para=document.querySelector('.para-3');
para.insertAdjacentHTML('afterend',<a href="https://www.facebook.com">Link to Facebook</a>);
// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
let c=document.querySelector('#title');
c.textContent='Đây là thẻ tiêu đề';

// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
let add=document.querySelector('.description');
add.classList.add('text-box');

// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
let curA=document.querySelector('.para-3');
let button=document.createElement('button');
button.textContent='click me';
curA.parentNode.replaceChild(button,curA);
// curA.replaceWith(button)

// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
let node=document.querySelector('.para-2');
let cop=node.cloneNode(true);
node.insertAdjacentElement('afterend',cop);

// Xóa thẻ có class=“para-1” -->
let dele=document.querySelector('para-1');
dele.remove();
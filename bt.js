// <!-- Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
// Xóa thẻ có class=“para-1” -->
let a=document.getElementById('heading');
a.style.color='red';
a.textContent=a.textContent.toUpperCase();
//
let b= document.querySelectorAll('.para');
b.forEach(para => {para.style.color='blue';
para.style.fontSize = '20px';
});
//
 let para=document.querySelector('.para-3');
 para.insertAdjacentHTML('afterend',<a href="https://www.facebook.com">Link to Facebook</a>);

 let c=document.querySelector('#title');
c.textContent='đây là thẻ tiêu đề';

let d= document.querySelector('.description');
d.classList.add('text-box');

let e=document.querySelector('.para-3');
let button=document.createElement('button');
button.textContent='click me';
e.replaceWith(button);


  let f=document.querySelector('.para-2');
  let cloneP=f.cloneNode(true);
  f.insertAdjacentElement('afterend',cloneP);

let para1para1=querySelector('.para-1');
para1.remove();


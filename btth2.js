// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu
// Đặt màu văn bản thành #777
let para1 = document.querySelector('#text');
para1.style.color = '#777';

// Đặt kích thước phông chữ thành 2rem
let para1 = document.querySelector('#text');
para1.style.fontSize = '2rem';

// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
let para1 = document.querySelector('#text');
para1.innerHTML = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.';

// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
let para2 = document.getElementsByTagName('li');
for (let i = 0; i < para2.length; i++) {
    para2[i].style.color = 'blue';
}

// Câu 3: Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
let para3 = document.getElementById('list');
for (let i = 8; i <= 10; i++) {
    let newList = document.createElement('li');
    newList.textContent = "Item " + i;
    para3.appendChild(newList);
}
// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
let items = list.getElementsByTagName('li');
items[0].style.color = 'red';
// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
let items = list.getElementsByTagName('li');
items[2].style.backgroundColor = 'blue';
// Remove thẻ <li> 4
let item4 = items[3];
item4.parentNode.removeChild(item4);

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
let newItem = document.createElement('li');
let para4 = document.getElementById('list');
newItem.textContent = 'Item 11';
para4.appendChild(newItem);

// Render số box = số lượng màu ra ngoài màn hình bằng javascript (5 box)
let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
];
let boxes = document.querySelector('.boxes');
let pointsSpan = document.querySelector('.points');
let btn = document.querySelector('#btn');
let numBoxes = 5;
renderBoxes();
function renderBoxes() {
    for (let i = 0; i < numBoxes; i++) {
        let box = document.createElement('div');
        box.className = 'box';
        box.style.backgroundColor = colors[i % colors.length];
        box.addEventListener('click', () => {
            boxes.removeChild(box);
            numBoxes--;
            updateScore();
        });
        boxes.appendChild(box);
    }
    updateScore();
}
btn.addEventListener('click', () => {
    numBoxes += 5;
    renderBoxes();
});
function updateScore() {
    pointsSpan.innerText = numBoxes;
}

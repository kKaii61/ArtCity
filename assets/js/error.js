const eyes = document.querySelectorAll('.eye'); //chọn con mắt
const anchor = document.getElementById('anchor'); // chọn ảnh làm gốc
const rekt = anchor.getBoundingClientRect(); //Sử dụng getBoundClientRect để có được kích thước và vị trí của một phần tử là anchor
const anchorX = (rekt.left + rekt.width / 2); //lấy center của phần tử theo X
const anchorY = (rekt.top + rekt.height / 2) - 50; //lấy center của phần tử theo Y

console.log(rekt.left);
console.log(rekt.width);
console.log(rekt.top);
console.log(rekt.height);

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX; //lấy vị trí X dựa vào client web
    const mouseY = e.clientY; //lấy vị trí Y dựa vào client web

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    // console.log(angleDeg);

    eyes.forEach((eye) => {
        eye.style.transform = `rotate(${180 + angleDeg}deg)`;
    })
})

function angle(cx, cy, ex,ey) {
    const dy = ey - cy; // độ dài y từ vị trí y trong client tới gốc tọa độ của ảnh
    const dx = ex - cx; // độ dài x từ vị trí x trong client tới gốc tọa độ của ảnh
    const rad = Math.atan2(dy, dx); // hàm atan2 trả về góc tọa độ (0;0) đến cặp tọa độ chỉ định (dy,dx) bằng rad
    const deg = rad * 180 / Math.PI;
    return deg;
}
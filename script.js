const colorDisplay = document.getElementById('color-display');
const nextColorButton = document.getElementById('next-color');
const fullscreenButton = document.getElementById('toggle-fullscreen');
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffffff', '#000000', '#808080']; // 更多颜色
let currentColorIndex = 0;

function changeColor() {
    colorDisplay.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

nextColorButton.addEventListener('click', changeColor);
colorDisplay.addEventListener('click', changeColor); // 点击屏幕也可以切换颜色

// 全屏功能
fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
            document.body.classList.add('fullscreen');
        }).catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen().then(() => {
            document.body.classList.remove('fullscreen');
        });
    }
});
const fontSizeControl = document.getElementById('font-size-control');
const textElement = document.getElementById('text');
const colors = [
    '#FF5733', '#FFBE33', '#FFFF33', '#B5FF33', '#33FFAB', '#33D6FF', '#7A33FF',
    '#FF3366', '#FF9433', '#FFD633', '#75FF33', '#33FF5E', '#33D0FF', '#334BFF',
    '#FF33B3', '#FF3393'
];
let colorIndex = 0;

fontSizeControl.addEventListener('input', () => {
    const fontSize = fontSizeControl.value;
    const color = getNextColor();

    textElement.style.fontSize = `${fontSize}px`;
    textElement.style.color = color;
});

function getNextColor() {
    const color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    return color;
}
var originalDiv = document.getElementById('myDiv');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

originalDiv.addEventListener("click", function () {
    const newDiv = originalDiv.cloneNode(true);
    newDiv.style.backgroundColor = getRandomColor();
    document.body.appendChild(newDiv);
});
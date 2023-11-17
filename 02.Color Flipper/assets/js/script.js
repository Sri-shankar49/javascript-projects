const clickMe = document.querySelector("#btn");
const colorText = document.querySelector("#color");
const wrap = document.querySelector("#wrap");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function randomHexVal() {
    let randomIndex = Math.floor(Math.random() * (16));
    return hex[randomIndex];
}

console.log(randomHexVal());

clickMe.addEventListener("click", (e) => {
    let hexColor = '#';
    for (let i = 1; i <= 6; i++) {
        hexColor = hexColor += randomHexVal();
    }
    console.log(hexColor);
    // wrap.cssText = `backgroundColor: ${hexColor}`
    colorText.textContent = `${hexColor}`
    wrap.style.backgroundColor = `${hexColor}`
})

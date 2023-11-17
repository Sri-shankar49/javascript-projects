function convertDeg() {
    let input = document.getElementById("input").value;
    let farenheit = (input * 1.8) + 32;
    let result = document.getElementById("result");
    result.innerText = `${farenheit.toFixed(3)} farenheit`;

    document.getElementById("input").value = "";
}
let submitBtn = document.querySelector(".submit");
console.log(submitBtn);

submitBtn.addEventListener("click", () => {
    let inputVal = document.querySelector("#input").value;
    console.log(inputVal);

    let array = inputVal.split("");
    console.log(array);

    for (let i = 0; i < array.length; i++) {

        switch (array[i]) {
            case "+":
                console.log(array[i], "add", `${array[0]} ${array[i]} ${array[2]}`);
                break;
            case "-":
                console.log(array[i], "sub");
                break;
            case "*":
                console.log(array[i], "mul");
                break;
            case "/":
                console.log(array[i], "div");
                break;
        }
    }
})
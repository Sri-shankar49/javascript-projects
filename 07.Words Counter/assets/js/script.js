function counter() {
    let regex = /[a-zA-Z0-9]/g;         // only count letters and numbers


    // let regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;

    let textVal = document.getElementById("textarea").value;
    console.log(textVal);
    textVal = textVal.match(regex).length;

    let result = document.querySelector("#result");
    result.innerText = textVal + " Words";
    console.log(result);

}
function Pal() {
    let textVal = document.getElementById("textarea").value.toUpperCase().trim();
    console.log(textVal);

    let result = document.querySelector("#result");
    console.log(result);

    // convert string to an array
    const arrayValues = textVal.split("");
    console.log(arrayValues);

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse("");
    console.log(reverseArrayValues);

    // convert array to string
    const reverseString = reverseArrayValues.join("");
    console.log(reverseString);

    if (textVal == reverseString) {
        console.log('It is a palindrome');
        result.innerText = 'It is a palindrome'
    }
    else {
        console.log('It is not a palindrome');
        result.innerText = 'It is not a palindrome';
    }
}
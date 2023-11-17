function fdCal() {
    let monthsVal = document.getElementById("input").value;
    console.log(monthsVal);

    let rate = 0;

    if (monthsVal < 3) {
        rate = 5.8;
    }
    else if (monthsVal >= 3 && monthsVal <= 6) {
        rate = 6.5;
    }
    else if (monthsVal >= 7 && monthsVal <= 9) {
        rate = 6.8;
    }
    else if (monthsVal >= 10) {
        rate = 7;
    }
    else {

    }

    let result = document.querySelector("#result");
    result.innerHTML = `Your interest rate is ${rate}%`
    console.log(result);

    document.getElementById("input").value = "";
}
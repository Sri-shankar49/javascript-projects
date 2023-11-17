function ebBill() {
    let inputVal = document.getElementById("input").value;
    console.log(inputVal);

    let rate = 0;

    if (inputVal <= 50) {
        rate = inputVal * 0.75;
        console.log(rate);
    }
    else if (inputVal >= 50 && inputVal <= 100) {
        // rate = inputVal * 1;
        rate = (inputVal - 50) * 1 + (50 * 0.75);
        console.log(rate);
    }
    else if (inputVal >= 100 && inputVal <= 250) {
        // rate = inputVal * 1.30;
        rate = (inputVal - 100) * 1.30 + (50 * 0.75) + (50 * 1);
        console.log(rate);
    }
    else if (inputVal > 250) {
        // rate = inputVal * 1.50;
        // rate = (inputVal - 250) * 1.50 + (195) + (37.5) + (50);
        rate = (inputVal - 250) * 1.50 + (50 * 0.75) + (50 * 1) + (150 * 1.30);
        console.log(rate);
    }

    let result = document.querySelector("#result");
    result.innerText = `Your bill amount is Rs. ${rate.toFixed(2)}`
    console.log(result);

    document.getElementById("input").value = "";
}

// if (unit <= 50)
// rate = unit*0.75
// else if (unit>=50 && unit<=100)
// rate = (unit-50)*1 + (50*0.75)
// else if (unit>=100 && unit<=250)
// rate = (unit-100)*1.30 + (50*0.75)+(50*1)
// else if (unit> 250)
// rate = (unit-250)*1.50 + (195)+ (37.5)+(50)
// else
// rate = 0
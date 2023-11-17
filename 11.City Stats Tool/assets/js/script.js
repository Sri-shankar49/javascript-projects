let selectOpt = document.getElementById("select");
console.log(selectOpt);

let statsBtn = document.querySelector(".btn");
console.log(statsBtn);

statsBtn.addEventListener("click", (event) => {

    let city = selectOpt.options[selectOpt.selectedIndex].value
    console.log(city);

    let population = "";
    let literacyRate = "";
    let language = "";

    switch (city) {
        case 'Banglore':
            population = 8443675;
            literacyRate = 88.71;
            language = 'Kannada';
            break;
        case 'Chennai':
            population = 4646732;
            literacyRate = 90.20;
            language = 'Tamil';
            break;
        case 'Mumbai':
            population = 12442373;
            literacyRate = 89.73;
            language = 'Marathi';
            break;
        case 'Delhi':
            population = 16787941;
            literacyRate = 86.20;
            language = 'Hindi';
            break;
    }

    let text = `The indian City of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}%`;
    console.log(text);

    let result = document.querySelector("#result");
    result.innerText = `${text}`;
    console.log(result);




    // let wrap = document.getElementById("wrapper");
    // // Create div Element
    // let div = document.createElement("div");
    // div.className = "dummy";
    // div.textContent = text;
    // console.log(div);

    // wrap.append(div);

})
// alert("Hello World!!!");

// Exercise-1
let amount = 1000;
console.log("Your bill amount is Rs." + amount);

// script-htm
let msg = document.getElementById("message");
msg.innerHTML = "Welcome to JS practice";
console.log(msg);

// random letter taking
function bha() {
    let herName = "Bharathi";
    let ranVAl = Math.floor(Math.random() * 8)
    return herName[ranVAl];
}
console.log(bha());


// template literals
let firstN = "Ramya";
let lastN = "Murali";
let city = "Chennai";

// backtick
console.log(`${firstN} ${lastN} lives in ${city}`);

// Multi line string
let birthday = `happy 
    Birthday`
console.log(birthday);

// Exercise
let item = 5;
let amt = 95;
console.log(`You have ${item} items in your cart.
Your bill amount is $ ${amt}`);


// exercise

let array = [5, 8, 10, 7, 9, 11];

// array.splice(3, 1, 17);
// array.splice(4, 1, 19);
// array.splice(5, 1, 111);


// array.unshift(100);

// array.push(200);

// array.push(1000);

// array.splice(3, 0, 0);

let arrLength = array.length;
console.log(arrLength);

console.log(array);


let word = "sdfgtyhuj sdfghj sdfghj sdfghj sdfgh sdfgh";
let regex = /[a-zA-Z0-9]/g; // only count letters and numbers
console.log(word.match(regex).length);

let formOne = document.forms.registerForm;
console.log(formOne);

formOne.addEventListener("submit", (event) => {
    event.preventDefault();

    let username1 = formOne.username;
    console.log(username1);

    let email1 = formOne.email;
    console.log(email1);

    let password1 = formOne.password;
    console.log(password1);

    let cpassword1 = formOne.cpassword;
    console.log(cpassword1);

    // Trim leading and trailing whitespaces
    let usernameValue = username1.value.trim();
    let emailValue = email1.value.trim();
    let passwordValue = password1.value.trim();
    let cpasswordValue = cpassword1.value.trim();

    // Regular expression for basic email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password must be at least 8 characters long
    // It must contain at least one lowercase letter, one uppercase letter, one digit, and one special character -> 8 digits
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (usernameValue == "") {
        username1.style.cssText = `border: 1px solid red;`
        let err = document.querySelector(".error");
        err.innerText = "Username is required";
        console.log(err);
    }
    else if (usernameValue !== "") {
        username1.style.cssText = `border: 1px solid #08ff08;`
        let err = document.querySelector(".error");
        err.innerText = "Success";
        err.style.color = "#08ff08";
        console.log(err);
    }


    if (emailValue == "") {
        email1.style.cssText = `border: 1px solid red;`
        let err = document.querySelector(".errMail");
        err.innerText = "Email is required";
        console.log(err);
    }
    else if (!emailRegex.test(email1.value)) {
        email1.style.cssText = `border: 1px solid red;`;
        let err = document.querySelector(".errMail");
        err.innerText = "Invalid email format";
        console.log(err);
    } else {
        email1.style.cssText = `border: 1px solid #08ff08;`;
        let err = document.querySelector(".errMail");
        err.innerText = "Success";
        err.style.color = "#08ff08";
        console.log(err);
        console.log("Test pass", emailRegex.test(email1.value));
    }


    if (passwordValue == "") {
        password1.style.cssText = `border: 1px solid red;`
        let err = document.querySelector(".errPass");
        err.innerText = "Password is required";
        console.log(err);
    }
    else if (!passwordRegex.test(password1.value)) {
        password1.style.cssText = `border: 1px solid red;`;
        let err = document.querySelector(".errPass");
        err.innerText = "Password should contain atleast one uppercase letter, one lowercase letter, one number and a special character & 8 digits."
        console.log(err);
    }
    else {
        password1.style.cssText = `border: 1px solid #08ff08;`
        let err = document.querySelector(".errPass");
        err.innerText = "Success";
        err.style.color = "#08ff08";
        console.log(err);
    }


    if (cpasswordValue == "") {
        cpassword1.style.cssText = `border: 1px solid red;`
        let err = document.querySelector(".errCpass");
        err.innerText = "Confirm Password is required";
        console.log(err);
    }
    else if (passwordValue !== cpasswordValue) {
        password1.style.cssText = `border: 1px solid red;`;
        cpassword1.style.cssText = `border: 1px solid red;`;
        let err = document.querySelector(".errCpass");
        err.innerText = "Passwords do not match";
        console.log(err);
    }
    else {
        cpassword1.style.cssText = `border: 1px solid #08ff08;`
        let err = document.querySelector(".errCpass");
        err.innerText = "Success";
        err.style.color = "#08ff08";
        console.log(err);
    }

    // All validations passed, submit the form
    formOne.submit();
    console.log(`Form is submitted Successfully!`);

})
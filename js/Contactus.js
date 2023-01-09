const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

/////////////////////////////////////////

var userName = document.getElementById("userName");
var userNameValidationMessage = document.getElementById("userNameValidationMessage");

var phone = document.getElementById("phone");
var phoneValidationMessage = document.getElementById("phoneValidationMessage");

var email = document.getElementById("email");
var emailValidationMessage = document.getElementById("emailValidationMessage");

var submit = document.getElementById("submit");
var hasError = false;
console.log(submit);

function nameValidation() {
    if (userName.value.length < 4) {
        // userName.setAttribute("class", "errorStyle");
        userNameValidationMessage.style.display = "block";
        hasError = true;
    } else {
        // userName.setAttribute("class", "doneStyle")
        userNameValidationMessage.style.display = "none";
        hasError = false;
    }
}

function phoneValidation() {
    if (phone.value.length < 8) {
        // phone.setAttribute("class", "errorStyle");
        phoneValidationMessage.style.display = "block";
        hasError = true;
    } else {
        // phone.setAttribute("class", "doneStyle");
        phoneValidationMessage.style.display = "none";
        hasError = false;
    }

}

function emailValidation() {
    if (email.value.includes("@")) {
        // email.setAttribute("class", "doneStyle");
        emailValidationMessage.style.display = "none";
        hasError = false;
    } else {
        // email.setAttribute("class", "errorStyle");
        emailValidationMessage.style.display = "block";
        hasError = true;
    }
}


userName.addEventListener("input", nameValidation);
phone.addEventListener("input",phoneValidation);
email.addEventListener("input", emailValidation);
submit.addEventListener("click", function (e) {
    nameValidation();
    phoneValidation();
    emailValidation();
    if (hasError) {
        e.preventDefault();
        // submit.setAttribute("disabled","");
        console.log("has error");

    } else {
        //  submit.removeAttribute("disabled");
        console.log("tureeeee");

    }
});
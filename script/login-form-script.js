import * as formUtil from "./form-util.js";

const formInputs = [
    {
        name: "email",
        validators: [
            formUtil.required('Email is required'),
            formUtil.validEmail('Email is not valid')
        ]
    },
    {
        name: "password",
        validators: [
            formUtil.required('Password is required'),
            formUtil.minLength(6, 'Password must be at least 6 characters'),
            formUtil.maxLength(50, 'Password must be less than 50 characters')
        ]
    },
].reduce((acc, item) => {
    acc[item.name] = item.validators;

    return acc;
}, {});

const form = document.querySelector(".login__form");
const appFormItems = form.getElementsByClassName("login__form-item");
const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", () => {
    if (!validteForm()) {
        return;
    }

    window.location.href = "/index.html"
});

for (let item of appFormItems) {
    const input = item.querySelector(".input");

    input.addEventListener("input", (event) => {
        formUtil.validateInput(item, input, formInputs);
    });
}

function validteForm() {
    var isValidResult = true;

    for (let item of appFormItems) {
        const isValid = formUtil.validateInput(item, item.querySelector(".input"), formInputs);

        if (!isValid) {
            isValidResult = false;
        }
    }

    return isValidResult;
}
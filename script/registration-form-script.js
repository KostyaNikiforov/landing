import * as formUtil from "./form-util.js";

const formInputs = [
    {
        name: "fullname",
        validators: [
            formUtil.required('Full name is required'),
            formUtil.minLength(2, 'Full name must be at least 2 characters'),
            formUtil.maxLength(50, 'Full name must be less than 50 characters')
        ]
    },
    {
        name: "email",
        validators: [
            formUtil.required('Email is required'),
        ]
    },
    {
        name: "phone-number",
        validators: [
            formUtil.required('Phone number is required')
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
    {
        name: "confirm-password",
        validators: [
            formUtil.required('Confirm password is required'),
            formUtil.minLength(6, 'Confirm password must be at least 6 characters'),
            formUtil.maxLength(50, 'Confirm password must be less than 50 characters'),
        ]
    }
].reduce((acc, item) => {
    acc[item.name] = item.validators;

    return acc;
}, {});

const form = document.querySelector(".registration__form");
const appFormItems = form.getElementsByClassName("registration__form-item");
const registrationButton = document.getElementById("registration-button");
const dialogContainer = document.getElementById("dialog-container");
const sendApplicationDialog = document.getElementById("registration-success-dialog");

registrationButton.addEventListener("click", () => {
    if (!validteForm()) {
        return;
    }

    dialogContainer.classList.add("dialog-container--shown");
    sendApplicationDialog.classList.add("dialog--open");
    const {width, height} = sendApplicationDialog.getBoundingClientRect();

    sendApplicationDialog.style.left = `calc(50% - ${width / 2}px)`
    sendApplicationDialog.style.top = `calc(50% - ${height / 2}px)`

    const primarryButton = sendApplicationDialog.querySelector(".dialog__primarry-button");

    primarryButton.addEventListener("click", () => {
        dialogContainer.classList.remove("dialog-container--shown");
        sendApplicationDialog.classList.remove("dialog--open");
    }, { once: true });
});

for (let item of appFormItems) {
    const input = item.querySelector(".input");

    input.addEventListener("input", (event) => {
        if (input.name === "phone-number") {
            formUtil.phoneNumberMask(event);
        }

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

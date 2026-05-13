import * as formUtil from "./form-util.js";

const applicationSubmitButton = document.getElementById("application-submit-button");
const dialogContainer = document.getElementById("dialog-container");
const sendApplicationDialog = document.getElementById("send-application-success-dialog");
const form = document.querySelector(".send-application__form");
const appFormItems = form.getElementsByClassName("send-application__form-item");

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
        name: "phone-number",
        validators: [
            formUtil.required('Phone number is required')
        ]
    },
    {
        name: "goal",
        validators: [
            formUtil.required('Goal is required'),
            formUtil.minLength(2, 'Goal must be at least 2 characters'),
            formUtil.maxLength(200, 'Goal must be less than 200 characters')
        ]
    }
].reduce((acc, item) => {
    acc[item.name] = item.validators;

    return acc;
}, {});

applicationSubmitButton.addEventListener("click", () => {
    if (!validteForm()) {
        return;
    }

    dialogContainer.classList.add("dialog-container--shown");
    sendApplicationDialog.classList.add("dialog--open");
    const { width, height } = sendApplicationDialog.getBoundingClientRect();

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
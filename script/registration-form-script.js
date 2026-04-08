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
        validateInput(item.querySelector(".input"), item);
    });
}

function validteForm() {
    var isValidResult = true;

    for (let item of appFormItems) {
        const isValid = validateInput(item.querySelector(".input"), item);

        if (!isValid) {
            isValidResult = false;
        }
    }

    return isValidResult;
}

function validateInput(input, item) {
    if (isValidValue(input.value)) {
        item.classList.remove("registration__form-item--invalid");

        return true;
    } else {
        item.classList.add("registration__form-item--invalid");

        return false;
    }
}

function isValidValue(value) {
    return !!value?.length;
}
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
        item.classList.remove("login__form-item--invalid");

        return true;
    } else {
        item.classList.add("login__form-item--invalid");

        return false;
    }
}

function isValidValue(value) {
    return !!value?.length;
}
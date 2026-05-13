function validateInput(item, input, formInputs = {}) {
    const dangerText = item.querySelector(".danger-text");

    if (!formInputs[input.name]) {
        return true;
    }

    let errorMessage = null;

    for (let validate of formInputs[input.name]) {
        errorMessage = validate(input.value);

        if (errorMessage) {
            break;
        }
    }

    dangerText.textContent = errorMessage;

    if (errorMessage) {
        item.classList.add("form-item--invalid");
    } else {
        item.classList.remove("form-item--invalid");
    }

    return !!errorMessage;
}

function minLength(min, errorMessage) {
    return (value) => {
        if (value.length < min) {
            return errorMessage;
        }

        return null;
    }
}

function maxLength(max, errorMessage) {
    return (value) => {
        if (value.length > max) {
            return errorMessage;
        }

        return null;
    }
}

function required(errorMessage) {
    return (value) => {
        if (isEmpty(value)) {
            return errorMessage;
        }

        return null;
    }
}

function isEmpty(value) {
    return !value?.length;
}

function phoneNumberMask(e) {
    var value = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = !value[2] ? value[1] : value[1] + ' ' + value[2] + (value[3] ? '-' + value[3] : '') + (value[4] ? '-' + value[4] : '');
}

export {
    validateInput,
    minLength,
    maxLength,
    required,
    phoneNumberMask
};

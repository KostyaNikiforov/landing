const menuButton = document.getElementById("menu-button");
const options = menuButton.querySelector(".menu-button__options");
const applicationSubmitButton = document.getElementById("application-submit-button");
const dialogContainer = document.getElementById("dialog-container");
const sendApplicationDialog = document.getElementById("send-application-success-dialog");

var isMenuOptionsShown = false;

menuButton.addEventListener("click", () => {
    isMenuOptionsShown = !isMenuOptionsShown;

    if (isMenuOptionsShown) {
        options.style.display = "flex";
    } else {
        options.style.display = "none";
    }
});

applicationSubmitButton.addEventListener("click", () => {
    dialogContainer.classList.add("dialog-container--shown");
    sendApplicationDialog.classList.add("dialog--open");
});

applicationSubmitButton.addEventListener("click", () => {
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
const menuButton = document.getElementById("menu-button");

const options = menuButton.querySelector(".menu-button__options");

var isMenuOptionsShown = false;

menuButton.addEventListener("click", () => {
    isMenuOptionsShown = !isMenuOptionsShown;

    if (isMenuOptionsShown) {
        options.style.display = "flex";
    } else {
        options.style.display = "none";
    }
});

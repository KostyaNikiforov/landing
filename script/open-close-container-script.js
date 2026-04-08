const qaBloacks = document.getElementsByClassName("faq__qa");

for (let qa of qaBloacks) {
    if (qa.classList.contains("faq__qa--unclosable")) {
        continue;
    }

    const button = qa.querySelector(".faq__qa-header");

    button.addEventListener("click", () => {
        isOpen = qa.classList.contains("faq__qa--open");

        if (!isOpen) {
            qa.classList.add("faq__qa--open");
            qa.classList.remove("faq__qa--close");
        } else {
            qa.classList.add("faq__qa--close");
            qa.classList.remove("faq__qa--open");
        }
    });    
}

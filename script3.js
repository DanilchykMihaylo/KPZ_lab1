
const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
    header.addEventListener("click", function() {
        const content = this.nextElementSibling;

        if (content.classList.contains("active")) {
            content.classList.remove("active");
        } else {
            document.querySelectorAll(".accordion-content.active").forEach(openContent => {
                openContent.classList.remove("active");
            });
            content.classList.add("active");
        }
        const previousItem = this.parentElement.previousElementSibling;
        if (previousItem) {
            console.log("Попередній елемент:", previousItem.querySelector(".accordion-header").textContent);
        }
    });
});
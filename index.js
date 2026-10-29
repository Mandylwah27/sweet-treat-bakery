
console.log("Sweet Treats Bakery website loaded!");


document.querySelectorAll("[data-bakery-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const status = form.querySelector(".form-status");

        if (!form.reportValidity()) {
            if (status) {
                status.textContent =
                    "Please complete the required fields.";
            }
            return;
        }

if (status) {
    status.textContent =
        "Thank you for your support! Your enquiry has been received.";
}
    });
});

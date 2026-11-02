
console.log("Sweet Treats Bakery website loaded!");



// Product image lightbox
const lightbox = document.querySelector("#image-lightbox");

if (lightbox) {
    const lightboxImage = lightbox.querySelector(".lightbox-image");
    const closeButton = lightbox.querySelector(".lightbox-close");
    const imageButtons = document.querySelectorAll(".lightbox-trigger");

    // Open the selected image
    imageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const image = button.querySelector("img");

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");
            lightbox.setAttribute("aria-hidden", "false");
            closeButton.focus();
        });
    });

    // Close the lightbox
    function closeLightbox() {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
        lightboxImage.src = "";
    }

    closeButton.addEventListener("click", closeLightbox);

    // Close when clicking outside the image
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Close when pressing Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && lightbox.classList.contains("active")) {
            closeLightbox();
        }
    });
}


// Product search functionality
const productSearch = document.querySelector("#product-search");
const productCards = document.querySelectorAll(".product-card");
const searchMessage = document.querySelector("#search-message");

if (productSearch) {
    productSearch.addEventListener("input", () => {
        const searchTerm = productSearch.value.trim().toLowerCase();
        let visibleProducts = 0;

        productCards.forEach((card) => {
            const productName =
                card.querySelector("h2").textContent.toLowerCase();

            const productDescription =
                card.querySelector("p").textContent.toLowerCase();

            const matches =
                productName.includes(searchTerm) ||
                productDescription.includes(searchTerm);

            card.hidden = !matches;

            if (matches) {
                visibleProducts++;
            }
        });

if (searchMessage) {
    if (searchTerm === "") {
        searchMessage.textContent = "";
    } else if (visibleProducts === 0) {
        searchMessage.textContent =
            "Sorry, no matching products found.";
    } else {
        searchMessage.textContent =
            `${visibleProducts} product(s) found.`;
    }
}
    });
}

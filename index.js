
console.log("Sweet Treats Bakery website loaded!");


// ==========================================
// 1. PRODUCT IMAGE LIGHTBOX
// ==========================================

const lightbox = document.querySelector("#image-lightbox");

if (lightbox) {
    const lightboxImage = lightbox.querySelector(".lightbox-image");
    const closeButton = lightbox.querySelector(".lightbox-close");
    const imageButtons = document.querySelectorAll(".lightbox-trigger");

    // Open the selected image
    imageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const image = button.querySelector("img");

            if (!image || !lightboxImage || !closeButton) return;

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");
            lightbox.setAttribute("aria-hidden", "false");

            closeButton.focus();
        });
    });

    // Close the lightbox
    function closeLightbox() {
        if (!lightboxImage) return;

        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
        lightboxImage.src = "";
    }

    if (closeButton) {
        closeButton.addEventListener("click", closeLightbox);
    }

    // Close when clicking outside the image
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Close when pressing Escape
    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            lightbox.classList.contains("active")
        ) {
            closeLightbox();
        }
    });
}


// ==========================================
// 2. PRODUCT SEARCH AND FILTERING
// ==========================================

const productSearch = document.querySelector("#product-search");
const productCards = document.querySelectorAll(".product-card");
const searchMessage = document.querySelector("#search-message");

if (productSearch) {
    productSearch.addEventListener("input", () => {
        const searchTerm = productSearch.value.trim().toLowerCase();

        let visibleProducts = 0;

        productCards.forEach((card) => {
            const heading = card.querySelector("h2");
            const description = card.querySelector(".product-copy p");

            const productName = heading
                ? heading.textContent.toLowerCase()
                : "";

            const productDescription = description
                ? description.textContent.toLowerCase()
                : "";

            const matches =
                searchTerm === "" ||
                productName.includes(searchTerm) ||
                productDescription.includes(searchTerm);

            card.hidden = !matches;

            if (matches) {
                visibleProducts++;
            }
        });

        // Display search results
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


// ==========================================
// 3. DARK MODE AND LIGHT MODE
// ==========================================

const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {
    const themeIcon = themeToggle.querySelector(".theme-icon");
    const themeText = themeToggle.querySelector(".theme-text");

    const savedTheme = localStorage.getItem("sweetTreatsTheme");

    const prefersDark = window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    let isDarkMode = savedTheme
        ? savedTheme === "dark"
        : prefersDark;

    // Update the theme and button appearance
    function updateThemeButton() {
        document.body.classList.toggle("dark-mode", isDarkMode);

        if (themeIcon) {
            themeIcon.textContent = isDarkMode ? "☀" : "☾";
        }

        if (themeText) {
            themeText.textContent = isDarkMode
                ? "Light mode"
                : "Dark mode";
        }

        themeToggle.setAttribute(
            "aria-pressed",
            String(isDarkMode)
        );

        themeToggle.setAttribute(
            "aria-label",
            isDarkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
        );
    }

    // Apply the saved or preferred theme
    updateThemeButton();

    // Switch between dark mode and light mode
    themeToggle.addEventListener("click", () => {
        isDarkMode = !isDarkMode;

        localStorage.setItem(
            "sweetTreatsTheme",
            isDarkMode ? "dark" : "light"
        );

        updateThemeButton();
    });
}

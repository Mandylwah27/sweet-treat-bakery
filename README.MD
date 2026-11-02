# Sweet Treats Bakery Website (HTML Project – Part 1, Part 2 and Part 3)

## Student Information

- **Student Name:** Mandisa Msomi
- **Student Number:** ST10501321
- **Module Code:** DINM1 WEDE5020
- **Academic Year:** 2026

---

## Project Overview

This project involves developing a website for **Sweet Treats Bakery**, a family-owned bakery based in Durban, South Africa.

The website was developed in three stages:

- **Part 1:** Planning the website, identifying the bakery's purpose and audience, researching content, and preparing the initial website structure.
- **Part 2:** Building and styling the multi-page website using HTML and CSS, including the page content, navigation, product images and contact information.
- **Part 3:** Improving the website with JavaScript functionality, interactive features, product search, image lightbox, SEO, online forms and an interactive map. Further refinements include a dark mode / light mode toggle and improved product filtering.

The purpose of the website is to introduce Sweet Treats Bakery, share its story, display its products, and provide customers with contact information and online enquiry facilities.

The purpose of the website is to introduce Sweet Treats Bakery, share its story, display its products, and provide customers with contact information and online enquiry facilities.

---

## Project Structure

The website contains the following HTML pages:

- **index.html** → Homepage with welcome message and navigation.
- **about.html** → Organisation overview, mission, vision and history.
- **service.html** → Products page displaying cakes, bread and pastries with descriptions and images.
- **enquiry.html** → Enquiry form allowing customers to submit product enquiries and special-order requests.
- **contact.html** → Contact information, interactive map and contact form.

### Supporting Files and Folders

- **index.css** → Shared stylesheet used to style the website.
- **index.js** → JavaScript file containing interactive website functionality.
- **assets/** → Folder containing website images:
  - red-velvet-cake.png
  - freshly-baked-bread.png
  - bakery-pastries.png

---

## Goals and Objectives

- Provide clear information about Sweet Treats Bakery.
- Display bakery products with descriptions and pictures.
- Allow visitors to switch between light mode and dark mode.
- Allow customers to submit enquiries online.
- Provide contact details and opening hours.
- Improve website usability and accessibility.
- Introduce interactive website features using JavaScript.
- Improve search engine visibility through SEO.
- Provide a website that customers and assessors can access through a web browser.

---

## Technical Requirements

- **Languages:** HTML5, CSS3 and JavaScript.
- **Editor:** Visual Studio Code.
- **Browser:** Microsoft Edge / Google Chrome.
- **Repository:** GitHub.
- **Hosting:** GitHub Pages (planned deployment).
- **Forms:** Formspree.
- **Interactive Map:** OpenStreetMap.
- **Images:** Bakery-related images stored in the assets folder.

---

## Website Features and Functionality

### 1. Website Structure and Styling

The website consists of five separate HTML pages with navigation links between them. Shared CSS styling is used to maintain a consistent appearance across the website.

### 2. Interactive Product Gallery (Lightbox)

An interactive lightbox feature was implemented on the products page.

Features include:
- Clicking a product image opens an enlarged version.
- A close button allows visitors to close the image.
- Clicking outside the image closes the lightbox.
- Pressing the Escape key closes the lightbox.

### 3. Dynamic Product Search

JavaScript was used to implement a live product search feature.

Features include:
- Searching products by name.
- Searching using words in product descriptions.
- Filtering products as the customer types.
- Displaying a message when no matching products are found.
- Clearing the search field to display all products again.

### 4. Interactive Map

An interactive OpenStreetMap map was added to the contact page.

Visitors can view the map and zoom in and out.

### 5. Enquiry Form

The enquiry page allows customers to submit product enquiries and special-order requests.

The form includes:
- Full name.
- Email address.
- Optional cellphone number.
- Product selection.
- Enquiry details.

Validation includes:
- Required field validation.
- Email format validation.
- Cellphone number validation requiring exactly 10 digits when provided.

Formspree was integrated to process form submissions. A test submission was successfully received, and its notification status was confirmed as delivered.

### 6. Contact Form

The contact page contains a separate online contact form.

The form includes:
- Name.
- Email address.
- Optional cellphone number.
- Message.

The form uses browser validation and is connected to a separate Formspree endpoint. A test submission was successfully submitted.

### 7. Dark Mode and Light Mode

A theme toggle was added across all five website pages.

Features include:
- Visitors can switch between light mode and dark mode.
- The button displays a moon icon in light mode and a sun icon in dark mode.
- The selected theme is saved in the browser and remembered when visitors move between pages.

### 8. Search Engine Optimisation (SEO)

SEO improvements were implemented across all five website pages.

These include:
- Page-specific title tags.
- Meta descriptions.
- Meta keywords.
- Robots directives.
- Descriptive image filenames.
- Descriptive image alternative text (alt text).

---

## Budget (Part 1 and Part 2)

- Domain name: Approximately R150 per year.
- Hosting: Approximately R50–R100 per month.
- Email hosting: Approximately R50 per month.
- Development: R0 (completed by the student).
- Images: R0 (free bakery images).

GitHub Pages is being considered as a free hosting option for publishing the website.

---

## Project Timeline

- **Part 1:** Research, planning, identification of the website purpose and audience, and preparation of content.
- **Part 2:** Creation of the HTML page structure, navigation, website content, images and CSS styling.
- **Part 3:** Implementation of JavaScript features, product search, image lightbox, interactive map, SEO improvements, online forms, and dark/light theme switching.
- **Final preparation:** Browser testing, project documentation, README and changelog updates, descriptive Git commits and website deployment.
- **Final Submission:** GitHub documentation, changelog, descriptive commits and website deployment.

---

## GitHub and Deployment

A GitHub repository has been created to store and manage the Sweet Treats Bakery website source code.

The following activities are part of the final submission process:

- Uploading the latest website files to GitHub.
- Maintaining a README.md file with project information.
- Recording development activities in a Changelog.
- Creating multiple descriptive Git commits.
- Enabling GitHub Pages for website deployment.
- Testing the published website.
- Sharing the website URL for assessment.

**Deployment Status:** Pending.

---

## Changelog

### 2 November 2026
- Updated the project documentation to clearly describe the work completed in Part 1, Part 2 and Part 3.
- Updated the JavaScript theme toggle to preserve the moon / sun icon and separate button text when switching themes.
- Improved product search filtering and documented the CSS rule that hides product cards that do not match the search.
- Resolved the unfinished Git merge conflicts in the website HTML, CSS, and JavaScript files.
- Retained the product search and image lightbox functionality on the Products page.
- Retained the existing Formspree submission endpoints for the Enquiry and Contact forms.
- Corrected duplicate document markup and removed an outdated duplicate Enquiry page embedded in `about.html`.
- Added a consistent dark mode / light mode toggle across all five pages. The selected theme is remembered between pages.
- Preserved the existing shared `index.css` and `index.js` structure, page content, navigation, SEO metadata, map, and image assets.

## Conclusion

The Sweet Treats Bakery website has progressed from a basic HTML and CSS website into a more functional website through the introduction of JavaScript, interactive features, dynamic product search, an interactive map, SEO improvements and online forms.

The project demonstrates the development of a multi-page website that provides bakery information, displays products and allows customers to interact with the business through online enquiry and contact forms.

The remaining activities include completing GitHub documentation, recording development changes, committing the latest source code and deploying the website for assessment.

---

## References

- Rosebank College (2026). *Website Development POE Guidelines*. The Independent Institute of Education (Pty) Ltd.
- W3Schools (2026). *HTML Tutorial*. Available at: https://www.w3schools.com/html/ (Accessed: 10 August 2026).
- Mozilla Developer Network (MDN) (2026). *HTML Basics*. Available at: https://developer.mozilla.org/en-US/docs/Learn/HTML (Accessed: 10 August 2026).
- Creative Commons (2026). *Free Images and Media Resources*. Available at: https://creativecommons.org/ (Accessed: 10 August 2026).
- Sweet Treats Bakery (2026). *Internal Business Information and Product Descriptions*. Durban, South Africa.

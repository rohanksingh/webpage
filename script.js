// Simple form validation example
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission for this demo
    alert("Thank you for contacting us! We'll get back to you soon. Cheers");
});

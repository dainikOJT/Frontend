document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    contactForm.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior (page reload)
        event.preventDefault();

        // Grab the user's name from the input field
        const nameInput = document.getElementById("name").value;

        // Display an interactive success message
        formFeedback.textContent = `Thank you, ${nameInput}! Your message has been sent successfully.`;
        formFeedback.style.display = "block";
        formFeedback.style.color = "green";
        formFeedback.style.marginTop = "15px";
        formFeedback.style.fontWeight = "bold";

        // Clear the form fields
        contactForm.reset();
    });
});

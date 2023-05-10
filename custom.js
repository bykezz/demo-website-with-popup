// Get all the "Learn More" buttons
const learnMoreButtons = document.querySelectorAll('.learn-more');

// Loop through each button and attach a click event listener
learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the target element for this button
        const target = document.querySelector(button.getAttribute('data-target'));

        // Show the popup
        target.style.display = 'block';

        // Get the close button inside the popup
        const closeButton = target.querySelector('.demo-popup-close');

        // Attach a click event listener to the close button
        closeButton.addEventListener('click', () => {
            // Hide the popup
            target.style.display = 'none';
        });
    });
});

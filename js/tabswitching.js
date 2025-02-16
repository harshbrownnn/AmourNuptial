// Get all modals and buttons
const modals = document.querySelectorAll('.modal');
const learnMoreButtons = document.querySelectorAll('.learn-more');
const closeModalButtons = document.querySelectorAll('.close-modal');

// Function to open a specific modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        console.log(`Modal "${modalId}" is now visible.`); // Debugging
    } else {
        console.error(`Modal with ID "${modalId}" not found!`);
    }
}

// Function to close all modals
function closeModals() {
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// Add event listeners to "Learn More" buttons
learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const service = button.getAttribute('data-service');
        const modalId = `${service}-modal`;
        console.log(`Button clicked: data-service="${service}", modalId="${modalId}"`); // Debugging
        openModal(modalId);
    });
});

// Add event listeners to close buttons
closeModalButtons.forEach(button => {
    button.addEventListener('click', closeModals);
});

// Close modals when clicking outside the modal
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        closeModals();
    }
});

// Accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');

        // Toggle accordion content visibility
        const content = item.querySelector('.accordion-content');
        if (content.style.maxHeight) {
            content.style.maxHeight = null; // Collapse
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'; // Expand
        }
    });
});
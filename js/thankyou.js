document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('weddingForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get user input values
        const fullName = document.getElementById('fullName').value;
        const partnerName = document.getElementById('partnerName').value;
        const weddingDate = document.getElementById('weddingDate').value;
        const serviceInterest = document.getElementById('serviceInterest').value;

        // Update the "Thank You" message with user input
        document.getElementById('thankYouNames').textContent = `${fullName} and ${partnerName}`;
        document.getElementById('thankYouDate').textContent = weddingDate;
        document.getElementById('thankYouService').textContent = serviceInterest;

        // Hide the form and show the "Thank You" message
        document.getElementById('formSection').style.display = 'none';
        document.getElementById('thankYouMessage').style.display = 'block';
    });
});
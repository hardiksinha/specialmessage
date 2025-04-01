document.getElementById('revealBtn').addEventListener('click', function() {
    // Reveal the additional message
    document.getElementById('moreMessage').classList.toggle('hidden');
    
    // Change button text after click
    const button = document.getElementById('revealBtn');
    if (button.textContent === 'Click here for more') {
        button.textContent = 'Hide message';
    } else {
        button.textContent = 'Click here for more';
    }
});

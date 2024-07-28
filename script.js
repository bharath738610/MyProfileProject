document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to sections
    document.querySelectorAll('header nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('header nav ul li a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle recommendation form submission
    document.getElementById('recommendation-form').addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value || 'Anonymous';
        const message = document.getElementById('message').value;

        // Create a new recommendation item
        const recommendationItem = document.createElement('div');
        recommendationItem.classList.add('recommendation-item');
        recommendationItem.innerHTML = `<p>"${message}" - ${name}</p>`;

        // Add the new recommendation item to the list
        document.getElementById('recommendation-list').appendChild(recommendationItem);

        // Show confirmation popup
        const popup = document.getElementById('confirmation-popup');
        popup.style.display = 'block';

        // Clear form inputs
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    });

    // Close popup function
    document.getElementById('confirmation-popup').querySelector('button').addEventListener('click', function() {
        document.getElementById('confirmation-popup').style.display = 'none';
    });

    // Scroll-to-top button functionality
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

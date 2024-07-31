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

    // Handle comment form submission
    document.getElementById('comment-form').addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value || 'Anonymous';
        const message = document.getElementById('message').value;

        // Create a new comment item
        const commentItem = document.createElement('div');
        commentItem.classList.add('recommendation-item');
        commentItem.innerHTML = `<p>"${message}" - ${name}</p>`;

        // Add the new comment item to the list
        document.getElementById('comment-form').appendChild(commentItem);

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

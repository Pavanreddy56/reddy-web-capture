
document.addEventListener('DOMContentLoaded', function() {
    // Get the contact form if it exists
    const contactForm = document.getElementById('contactForm');
    
    // Form submission handling
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const formStatus = document.getElementById('formStatus');
            
            // Check URL parameters for form submission status
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('status')) {
                const status = urlParams.get('status');
                if (status === 'success') {
                    formStatus.textContent = 'Thank you! Your message has been sent successfully.';
                    formStatus.className = 'success';
                    contactForm.reset();
                } else if (status === 'error') {
                    const errorMsg = urlParams.get('msg') || 'Something went wrong. Please try again.';
                    formStatus.textContent = errorMsg;
                    formStatus.className = 'error';
                }
            }
            
            // Client-side validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            
            if (!name || !email) {
                e.preventDefault();
                formStatus.textContent = 'Please fill in all required fields.';
                formStatus.className = 'error';
                return false;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                formStatus.textContent = 'Please enter a valid email address.';
                formStatus.className = 'error';
                return false;
            }
            
            // If using AJAX to submit the form (optional enhancement)
            /*
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            
            fetch('save-contact.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    formStatus.textContent = data.message;
                    formStatus.className = 'success';
                    contactForm.reset();
                } else {
                    formStatus.textContent = data.message;
                    formStatus.className = 'error';
                }
            })
            .catch(error => {
                formStatus.textContent = 'An error occurred. Please try again later.';
                formStatus.className = 'error';
            });
            */
        });
    }
    
    // Update copyright year
    const year = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll('.copyright p');
    copyrightElements.forEach(element => {
        element.textContent = element.textContent.replace('2023', year);
    });
});

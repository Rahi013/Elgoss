
document.querySelector('.contact-form').addEventListener('submit', function(event) {

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name === '' || email === '' || message === '') {

        event.preventDefault();

    
        alert('Please fill in all the fields.');
        return false;
    }


    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
    
        event.preventDefault();

        
        alert('Please enter a valid email address.');
        return false;
    }

    
    alert('Form submitted successfully!');
});

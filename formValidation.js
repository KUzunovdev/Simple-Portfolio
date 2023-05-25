document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name');
    var number = document.getElementById('number');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');

    if (name.value.trim() === '') {
        alert('Please enter your name.');
        name.focus();
        return false;
    }

    if (number.value.trim() === '') {
        alert('Please enter your number.');
        number.focus();
        return false;
    }

    // Phone number validation
    var phoneRegex = /^\d{10}$/; 
    if (!number.value.match(phoneRegex)) {
        alert('Please enter a valid phone number.');
        number.focus();
        return false;
    }

    if (email.value.trim() === '') {
        alert('Please enter your email.');
        email.focus();
        return false;
    }

    // Email validation
    var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!email.value.match(emailRegex)) {
        alert('Please enter a valid email address.');
        email.focus();
        return false;
    }

    if (subject.value.trim() === '') {
        alert('Please enter a subject.');
        subject.focus();
        return false;
    }

    if (message.value.trim() === '') {
        alert('Please enter your message.');
        message.focus();
        return false;
    }

   
    this.submit();
});

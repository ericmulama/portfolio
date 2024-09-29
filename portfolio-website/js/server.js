const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Contact form submission route
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Setup Nodemailer transport
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your-email@gmail.com', // Your email
            pass: 'your-email-password', // Your email password
        },
    });

    // Email options
    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // Your receiving email
        subject: 'New message from your portfolio',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error: ' + error.message);
        }
        res.status(200).send('Message sent!');
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


//Send the form data to your backend
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var formFeedback = document.getElementById('formFeedback');

    // Post form data to the server
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.text())
    .then(data => {
        formFeedback.style.display = 'block';
        formFeedback.classList.add('alert-success');
        formFeedback.classList.remove('alert-danger');
        formFeedback.innerHTML = 'Your message has been sent!';
        document.getElementById('contactForm').reset();
    })
    .catch((error) => {
        formFeedback.style.display = 'block';
        formFeedback.classList.add('alert-danger');
        formFeedback.classList.remove('alert-success');
        formFeedback.innerHTML = 'Error sending message.';
    });
});

//Send the form data using EmailJS
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var formFeedback = document.getElementById('formFeedback');

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        message: message,
    })
    .then(function(response) {
        formFeedback.style.display = 'block';
        formFeedback.classList.add('alert-success');
        formFeedback.innerHTML = 'Your message has been sent!';
        document.getElementById('contactForm').reset();
    }, function(error) {
        formFeedback.style.display = 'block';
        formFeedback.classList.add('alert-danger');
        formFeedback.innerHTML = 'Error sending message.';
    });
});



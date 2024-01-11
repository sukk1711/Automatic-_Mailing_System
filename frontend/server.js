const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { recipient, subject, content } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your_email@gmail.com', // Replace with your Gmail email
            pass: 'your_email_password', // Replace with your Gmail password or app-specific password
        },
    });

    const mailOptions = {
        from: 'your_email@gmail.com',
        to: recipient,
        subject: subject,
        text: content,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Error sending email.' });
        } else {
            console.log('Email sent:', info.response);
            res.json({ message: 'Email sent successfully.' });
        }
    });
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

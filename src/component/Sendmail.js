import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configure the nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Update with your email host
     auth: {
        user: 'khantawheed720@gmail.com', // Update with your email
        pass: 'Tawheed@12', // Update with your email password
      },
    });

    // Define the email options
    const mailOptions = {
      from: 'khantawheed720@gmail.com', // Update with your email
      to: 'khankhantawheed12@gmail.com', // Update with your destination email
      subject: 'New Message from Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
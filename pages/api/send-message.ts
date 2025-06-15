import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstName, lastName, email, subject, message } = req.body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Configure your SMTP transporter here
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // App password or real password (not recommended)
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'deyyabhi2001@gmail.com',
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`,
    });

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to send message.' });
  }
}

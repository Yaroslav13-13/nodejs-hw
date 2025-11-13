import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

console.log('📬 ENV check:', {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER,
});

export const sendEmail = async (options) => {
  try {
    const info = await transporter.sendMail(options);
    console.log('✅ Email sent:', info.response);
    return info;
  } catch (error) {
    console.error('❌ Email send error:', error.message);
    throw error;
  }
};

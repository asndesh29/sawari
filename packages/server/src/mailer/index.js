import nodemailer from 'nodemailer';
import { mailerPassword, mailerUserName } from '../config';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: mailerUserName,
    pass: mailerPassword,
  },
});

export default async (info) => {
  const mailRes = await transporter.sendMail(info);
  return mailRes;
};

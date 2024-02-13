'use server';
import { TContactMessage } from '@types';
import nodemailer from 'nodemailer';

const getTransporter = async () => {
  let transporter: nodemailer.Transporter | undefined;

  if (!transporter) {
    transporter = await nodemailer.createTransport({
      host: 'mail.dmerworldwide.com',
      port: 465,
      secure: true, // upgrade later with STARTTLS
      auth: {
        user: 'orders@dmerworldwide.com',
        pass: process.env.NODEMAILER_PW
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });

    await transporter.verify((error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to take our messages (orders@dmerworldwide.com)');
      }
    });
  }

  return transporter;
}

interface SendEmail {
  subject: string;
  body: string;
  recipient?: string;
}

export const sendEmail = async ({ subject, body, recipient }: SendEmail): Promise<void> => {
  const transporter = await getTransporter();
  const to = recipient || process.env.NODEMAILER_CONTACT;
  let message = {
    from: 'D-MER <orders@dmerworldwide.com>',
    to,
    subject,
    html: body,
  };

  await transporter.sendMail(message, (error) => {
    if (error) {
      console.error(error);
    }
  });

  console.log(`Email Sent to ${to}`);
}
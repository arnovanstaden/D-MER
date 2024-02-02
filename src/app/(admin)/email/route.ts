import { NextRequest, NextResponse } from 'next/server';
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

export const POST = async (req: NextRequest) => {
  const transporter = await getTransporter();

  // GEMMA Message
  const body = await req.json();
  const { subject, text, recipient } = body;

  const to = recipient || process.env.NODEMAILER_CONTACT;
  let message = {
    from: 'D-MER <orders@dmerworldwide.com>',
    to,
    subject,
    html: text,
  };

  await transporter.sendMail(message, (error) => {
    if (error) {
      console.log(error);
      return NextResponse.json({
        message: 'There seems to be an error submitting your order at this time. Please contact info@dmerworldwide.com'
      }, { status: 500 });
    }
  });

  console.log(`Email Sent to ${to}`)
  return NextResponse.json({
    message: 'Successful'
  }, { status: 200 });
}

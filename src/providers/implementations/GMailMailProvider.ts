import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { IMailMessage, IMailProvider } from "../IMailProvider";

export class GMailMailProvider implements IMailProvider {
  private transporter: Mail;

  constructor () {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  async sendMail(message: IMailMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    });
  }
}

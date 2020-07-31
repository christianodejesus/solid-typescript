interface IAddress {
  name: string;
  email: string;
}

export interface IMailMessage {
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendMail(message: IMailMessage): Promise<void>;
}

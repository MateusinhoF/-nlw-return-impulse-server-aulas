import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapters";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "9ec97f92a4a614",
        pass: "b874cb18a49337"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({ subject, body }: SendMailData){
        
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Mateus <mateuscosta@alunos.utfpr.edu.br>',
            subject,
            html: body,
        });
    }

}
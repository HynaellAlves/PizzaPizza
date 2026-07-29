import sgMail from '@sendgrid/mail';
import { email } from '../types/email_prooierts';

sgMail.setApiKey(process.env.API_KEY_SENDGRID as string)

export async function sendEmail({ name, email, message }: email) {

    const msg = {
        to: process.env.EMAIL_CORP_TO as string,
        bcc: email,
        from: process.env.EMAIL_CORP_FROM as string,
        replyTo: email,
        subject: `New Teste API, Nome: ${name}`,
        text: `Menssagem de contato enviada por: ${name} -> ${email}\n\n${message}`,
    };

    try {
        await sgMail.send(msg);
    }

    catch (err) {
        console.log(err);
        return err
    }

}
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

/*export const $app = pb.$app;
export const MailerMessage = pb.MailerMessage;

// Définir newMailClient comme méthode de pb.mailer
pb.mailer.createClient = function() {
  const brevoSMTPKey = 'xsmtpsib-c7bd50fbae6d35859a98dbcb33971bd0087edd24b7dc83862de991996a577eeb-MyOXZCVbz6Ur7tKJ'; // Remplacez par votre clé SMTP générée avec Brevo (Sendinblue)

  return {
    send: async function(message) {
      console.log('Message à envoyer:', message);

      // Logique d'envoi d'e-mail réel en utilisant Brevo (Sendinblue) SMTP
      const mailer = require('nodemailer');
      const transporter = mailer.createTransport({
        host: 'smtp.sendinblue.com',
        port: 587,
        secure: false,
        auth: {
          user: 'votre_utilisateur@exemple.com', // Remplacez par votre adresse e-mail Sendinblue
          pass: brevoSMTPKey, // Utilisez votre clé SMTP générée
        },
      });

      try {
        await transporter.sendMail({
          from: message.from.address,
          to: message.to.map(recipient => recipient.address).join(','),
          subject: message.subject,
          html: message.html,
        });

        console.log('Email envoyé avec succès à', message.to);
      } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
        throw error;
      }
    },
  };
};*/

export default pb;

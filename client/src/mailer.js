// Importation de Nodemailer
const nodemailer = require('nodemailer');

// Configuration du transporteur avec les paramètres de Gmail
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,          // Port sécurisé pour SSL
  secure: true,       // true pour utiliser SSL
  auth: {
    user: 'lucas.lucasleg@gmail.com',           // Remplacez par votre adresse Gmail
    pass: 'gcgriwotiagseumj'   // Remplacez par le mot de passe d'application généré
  }
});

// Options de l’email
let mailOptions = {
  from: '"Mon portfolio" <lucas.lucasleg@gmail.com>', // L’expéditeur (doit correspondre à l’adresse d’authentification)
  to: 'lucas.lucasleg@gmail.com',               // L’adresse du destinataire
  subject: 'Test de mail via Node.js',          // Sujet du mail
  text: 'Bonjour, ceci est un test d’envoi d’email via Gmail SMTP avec Node.js !'
};

// Envoi de l’email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Erreur lors de l’envoi :', error);
  }
  console.log('Email envoyé avec succès ! Message ID :', info.messageId);
});

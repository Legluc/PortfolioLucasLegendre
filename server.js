const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://lucas-legendre.com" // Remplacez par l'origine souhaitée en production si nécessaire
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API en ligne !");
});


const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');


// Middleware pour parser le body (formulaires et JSON)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Limiteur de taux : maximum 3 requêtes par minute par IP sur l'endpoint /send-mail
const mailLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 3,
  message: "Trop d'envois depuis cette adresse IP. Veuillez réessayer dans quelques instants."
});

// Endpoint pour traiter le formulaire de contact
app.post('/send-mail', mailLimiter, [
  // Validation et nettoyage des champs
  body('nom')
    .trim()
    .escape()
    .notEmpty().withMessage('Le nom est requis.'),
  body('prenom')
    .trim()
    .escape()
    .notEmpty().withMessage('Le prénom est requis.'),
  body('mail')
    .trim()
    .isEmail().withMessage('L’email n’est pas valide.')
    .normalizeEmail(),
  body('message')
    .trim()
    .escape()
    .notEmpty().withMessage('Le message est requis.')
], (req, res) => {
  console.log('Requête reçue sur /send-mail');
  // Vérification des erreurs de validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Extraction des données validées
  const { nom, prenom, mail, message } = req.body;

  // Configuration du transporteur Nodemailer pour Gmail
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,          // Port sécurisé pour SSL
    secure: true,       // Utilise SSL
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  // Configuration de l'email à envoyer
  let mailOptions = {
    from: `Mon portfolio <lucas.lucasleg@gmail.com>`,
    to: 'lucas.lucasleg@gmail.com',
    subject: 'Nouveau message via le formulaire de contact',
    text: message,
    html: `<p> ${nom} <br> ${prenom} <br> ${mail} <br> ${message}</p>`
  };

  // Envoi de l'email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Erreur lors de l'envoi:", error);
      return res.status(500).json({ message: "Erreur lors de l'envoi du mail." });
    }
    res.json({ message: "Email envoyé avec succès !" });
  });
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});


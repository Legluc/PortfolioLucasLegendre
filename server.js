const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API en ligne !");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));

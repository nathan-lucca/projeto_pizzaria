const express = require("express");

const app = express();

app.use(express.json());

// Ligando o servidor do APLICATIVO na porta 3000 (padrão)
app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});

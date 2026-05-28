const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve arquivos estáticos da pasta raiz
app.use(express.static(__dirname));

// Rota principal entrega o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir arquivos estáticos
app.use(express.static('.'));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para comprar.html
app.get('/comprar', (req, res) => {
    res.sendFile(path.join(__dirname, 'comprar.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
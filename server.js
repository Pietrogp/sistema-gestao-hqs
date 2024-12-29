const express = require('express');
const mysql = require('mysql2'); // Alterado para mysql2 para suporte a Promises
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'localhost',      // Substitua pelo IP do servidor se não for local
    user: 'root',           // Seu usuário do MySQL
    password: '',           // Sua senha do MySQL
    database: 'sistema_hqs' // Nome do banco
});

// Conexão com o banco de dados
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        process.exit(1); // Finaliza a aplicação em caso de erro na conexão
    }
    console.log('Conectado ao banco de dados MySQL.');
});

// Rota para cadastrar uma HQ
app.post('/cadastrar', (req, res) => {
    const { titulo, autor, ano, numeracao } = req.body;

    if (!titulo || !autor || !ano || !numeracao) {
        return res.status(400).send('Todos os campos são obrigatórios.');
    }

    const query = 'INSERT INTO hqs (titulo, autor, ano, numeracao) VALUES (?, ?, ?, ?)';
    const values = [titulo, autor, parseInt(ano), parseInt(numeracao)];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Erro ao inserir no banco:', err);
            return res.status(500).send('Erro ao cadastrar a HQ.');
        }
        res.status(200).send('HQ cadastrada com sucesso.');
    });
});

// Rota para listar HQs
app.get('/hqs', (req, res) => {
    const query = 'SELECT * FROM hqs';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar HQs:', err);
            return res.status(500).send('Erro ao buscar as HQs.');
        }
        res.status(200).json(results);
    });
});

// Inicialização do servidor
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

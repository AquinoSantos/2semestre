const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// Criando conexão com o banco de dados MySQL.
const sequelize = new Sequelize('db_fullstack', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Definindo o modelo para tabela no banco de dados.
const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
    },
    email: {
        type: DataTypes.STRING, // TIPO VARCHAR -> STRING -> TEXTO
        allowNull: false, // NOT NULL -> OBRIGATÓRIO -> NÃO PODE SER NULO OU VAZIO
        unique: true // NÃO PODE REPETIR
    }
});

const Funcionario = sequelize.define('Funcionario', {
    
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

// Endpoint para listar todos os funcionários
app.get('/funcionarios', async (req, res) => {
    const funcionarios = await Funcionario.findAll();
    res.json(funcionarios);
});

// Endpoint para listar todos os clientes
app.get('/clientes', async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
});

// Endpoint para listar todos os produtos
app.get('/produtos', async (req, res) => {
    const produtos = await Produto.findAll();
    res.json(produtos);
});
const app = express(); // INICIALIZA O EXPRESS
app.use(cors()); // PERMITE QUE API ACEITE CONEXÃO DO FRONT-END.
app.use(express.json()); // HABILITA O EXPRESS PARA ENTENDER REQUISIÇÕES COM JSON;

const port = 3000; // PORTA QUE A APLICAÇÃO VAI RODAR

// ROTA DE TESTE
app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

// ROTA PARA LISTAR TODOS OS USUÁRIOS
app.get('/usuarios', async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
});

// ROTA PARA CRIAR UM NOVO USUÁRIO
app.post('/usuarios', async (req, res) => {
    try {
        const { nome, email } = req.body;
        const novoUsuario = await Usuario.create({ nome, email });
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ mensagem: "E-mail já cadastrado." });
    }
});

// SINCRONIZA O MODELO COM O BANCO DE DADOS E INICIA O SERVIDOR
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`🚀API rodando em http://localhost:${port}`);
        console.log('🚀Conectado ao banco de dados MySQL.');
    });
}).catch(err => {
    console.error('Não foi possível conectar ao banco de dados:');
});



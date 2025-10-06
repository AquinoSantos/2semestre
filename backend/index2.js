const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('db_fullstack', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Funcionario = sequelize.define('Funcionario', {
    
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    cpf:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    
    rg:{type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    matricula:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    dataNascimento: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    salario:{
        type: DataTypes.FLOAT,
        allowNull: false
    },

    telefone:{
        type: DataTypes.STRING,
        allowNull: false

    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },


});
 // const produto com nome, lote e validade
const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lote: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    validade: { 
        type: DataTypes.STRING,
        allowNull: false
    },
});

const Cliente = sequelize.define('Cliente',{
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DataNascimento :{
        type: DataTypes.STRING,
        allowNull: false
    },
    protocoloAtendimento:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
});

app.get('/funcionario', async (req, res) => {
    const funcionarios = await Funcionario.findAll();
    res.json(funcionarios);
});
    const produto = await Produto.findAll();
    res.json(produto);


app.get('/cliente', async (req, res) => {
    const cliente = await Cliente.findAll();
    res.json(cliente);
});

const app = express();
app.use(cors()); 
app.use(express.json());

const port = 3000; 


app.get('/', (req, res) => {
    res.send('API está funcionando!');
});


app.get('/funcionarios', async (req, res) => {
    const funcionarios = await Funcionarios.findAll();
    res.json(funcionarios);
app.get('/funcionarios', async (req, res) => {
    const funcionarios = await Funcionario.findAll();
    res.json(funcionarios);
});
    try {
        const {nome,cpf,rg,matricula,dataNascimento,salario,telefone,email} = req.body;

        const novoFuncionario = await Funcionario.create({ nome, cpf, rg, matricula, dataNascimento, salario, telefone, email });
        res.status(201).json(novoFuncionario);
    } catch (error) {
        res.status(400).json({ mensagem: "Funcionario já cadastrado." });
    }
});



sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`🚀API rodando em http://localhost:${port}`);
        console.log('🚀Conectado ao banco de dados MySQL.');
    });
}).catch(() => {
    console.error('Não foi possível conectar ao banco de dados:');
});

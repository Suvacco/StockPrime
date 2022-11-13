const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const { dirname } = require('path');

const connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'stockprime'
})

const app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUnitialized: true
}));

app.use(express.json);
app.use(express.urlencoded( {extended: true} ));
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function(request, response){

    response.sendFile(path.join(__dirname + '/cadastro.html'));
})

app.post('/cad', function(request, response){
    let nome_dono = request.body.form3Example1cg;
    let cpf = request.body.form3Example2cg;
    let nome_empresa = request.body.form3Example3cg;
    let cnpj = request.body.form3Example4cg;
    let desc_empresa = request.body.form3Example5cg;
    let estado = request.body.form3Example6cg;
    let cidade = request.body.form3Example7cg;

    connection.query('INSERT INTO cliente (nome_dono, cpf_dono, nome_empresa, cnpj_empresa, descricao, estado,cidade) VALUES (?, ?, ?, ?, ?, ?, ?)', [nome_dono, cpf, nome_empresa, cnpj, desc_empresa, estado, cidade]);
})

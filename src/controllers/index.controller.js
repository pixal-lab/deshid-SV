const { json } = require('express');
const jwt = require('jsonwebtoken')
const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'bdpw',
    database: 'deshidratador',
    port: '5432'
});

const register = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const {rut, nombre, contrasena, correo, direccion } = req.body;
    const sqlQuery = 'INSERT INTO Usuarios (rut, nombre, contrasena, correo, direccion) values ($1, $2, $3, $4, $5) RETURNING *';
    const values = [rut, nombre, contrasena, correo, direccion];
    const response = await pool.query(sqlQuery, values);
    console.log('Registrando usuario con los datos: \n', response.rows);
    res.json(1);
};

const login = async (req, res) => {
    const { correo, contrasena } = req.body;
    const sqlQuery = 'SELECT count(*) FROM Usuarios WHERE correo = $1 and contrasena = $2';
    const values = [correo, contrasena];
    const response = await pool.query(sqlQuery, values);
    if (response.rows[0].count == '1'){ // usuario correcto
        const user = {
            correo,
            contrasena
        }
        jwt.sign({ user }, 'llavesecreta', (err, token) => {
            res.json({
                token
            })
        })
    }
    
    
}

const addConsulta = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { rut, titulo, descripcion } = req.body;
    const sqlQuery = 'INSERT INTO Consultas (rut_usuario, estado, titulo, descripcion) VALUES ($1, false, $2, $3) RETURNING *';
    const values = [rut, titulo, descripcion];
    const response = await pool.query(sqlQuery,values);
    console.log('Insertando consulta siguiente: \n', response.rows);
    res.json(1);
}

const getConsultas = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const response = await pool.query('SELECT id, titulo, descripcion FROM Consultas WHERE estado = false;');
    console.log(response.rows);
    res.json(response.rows);
}

const solveConsulta = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { id, respuesta } = req.body;
    const sqlQuery = 'UPDATE Consultas SET estado = true, respuesta = "$1" WHERE id = $2;';
    const response = await pool.query(sqlQuery,[id, respuesta]);
    console.log('resolviendo consulta con id = :', id, '\n', response.rows);
    res.json(1);
}

function verifytoken(req, res, next){
    const bearer = req.headers['authorization'];
    if(typeof bearer !== 'undefined'){
        tok = bearer.split(" ")[1];
        jwt.verify(tok, 'llavesecreta', (error, authData) => {
            if (error){
                res.send('badToken');
            }else{
                next()
            }
        });
    }else{
        res.send('missToken');
    }
}

module.exports = {
    verifytoken,
    register,
    login,
    addConsulta,
    getConsultas,
    solveConsulta
};
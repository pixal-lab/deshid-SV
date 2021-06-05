const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'bdpw',
    database: 'deshidratador',
    port: '5432'
});

const register = async (req,res) => {
    const { nombre, contrasena, correo, direccion } = req.body;
    const sqlQuery = 'INSERT INTO Usuarios (nombre, contrasena, correo, direccion) values ($1, $2, $3, $4) RETURNING *';
    const values = [nombre, contrasena, correo, direccion];
    const response = await pool.query(sqlQuery, values);
    console.log('Registrando usuario con los datos: \n', response.rows);
    res.json(1);
};

module.exports = {
    register
};
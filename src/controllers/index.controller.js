const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'bdpw',
    database: 'deshidratador',
    port: '5432'
});

const register = async (req, res) => {
    const { nombre, contrasena, correo, direccion } = req.body;
    const sqlQuery = 'INSERT INTO Usuarios (nombre, contrasena, correo, direccion) values ($1, $2, $3, $4) RETURNING *';
    const values = [nombre, contrasena, correo, direccion];
    const response = await pool.query(sqlQuery, values);
    console.log('Registrando usuario con los datos: \n', response.rows);
    res.json(1);
};

const addConsulta = async (req, res) => {
    const { id_usuario, titulo, descripcion } = req.body;
    const sqlQuery = 'INSERT INTO Consultas (id_usuario, estado, titulo, descripcion) values ($1, false, $2, $3) RETURNING *';
    const values = [id_usuario, titulo, descripcion];
    const response = await pool.query(sqlQuery,values);
    console.log('Insertando consulta siguiente: \n', response.rows);
    res.json(1);
}

module.exports = {
    register,
    addConsulta
};
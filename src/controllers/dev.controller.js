const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'bdpw',
    database: 'deshidratador',
    port: '5432'
});

const getUsers = async (req, res) => {
    const response = await pool.query('select * from Usuarios;');
    console.log(response.rows);
    res.json(response.rows);
};

const delUser = async (req, res) => {
    const { rut } = req.body;
    const response = await pool.query(`delete from Usuarios where rut='${rut}'`);
    console.log(response.rows);
    res.send('eliminado');
}

module.exports = {
    getUsers,
    delUser
};
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

module.exports = {
    getUsers
};
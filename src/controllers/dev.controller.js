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
    const { id } = req.body;
    const response = await pool.query(`delete from Usuarios where id='${id}'`);
    console.log(response.rows);
    res.send('hey');
}

module.exports = {
    getUsers,
    delUser
};
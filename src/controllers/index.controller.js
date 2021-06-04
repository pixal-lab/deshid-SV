const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'DESHIDRATADOR'
});

const register = (req,res) => {
    //const response = await pool.query('SELECT * FROM clientes');
};

const getUsers = (req, res) => {
    res.send('no hay base de datos aun');
    // pool.query('SELECT * FROM clientes');
};



module.exports = {
    getUsers,
    register
};
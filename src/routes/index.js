const { Router } = require('express');
const cors = require('cors');
const router = Router();
router.use(cors());
const { register, login, addConsulta, getConsultas, solveConsulta } = require('../controllers/index.controller');

router.post('/API-registro', register);
router.post('/API-login', login);

router.post('/API-addConsulta', addConsulta);
router.get('/API-getConsultas', getConsultas);
router.post('/API-solveConsulta', solveConsulta);






//dev

const { getUsers, delUser } = require ('../controllers/dev.controller');

router.get('/dev-GET-users', getUsers);
router.post('/dev-DEL-users', delUser);

module.exports = router;
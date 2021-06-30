const { Router } = require('express');

const cors = require('cors');
const router = Router();
router.use(cors());

const {
    register,
    modRegister,
    login,
    addConsulta,
    getConsultas,
    getUnsolveConsultas,
    solveConsulta,
    addDato,
    addDeshid,
    delDeshid,
    getDeshid,
    getDato,
    getAllDato,
    startProcess,
    stopProcess,
    act,
    verifytoken
} = require('../controllers/index.controller');

router.post('/API-registro', register);
router.post('/API-MOD-registro', modRegister);
router.post('/API-login', login);

router.post('/API-addConsulta', verifytoken, addConsulta);
router.get('/API-getConsultas', verifytoken, getConsultas);
router.get('/API-getUnsolveConsultas', verifytoken, getUnsolveConsultas);
router.post('/API-solveConsulta', verifytoken, solveConsulta);

router.post('/API-addDato', addDato);
router.post('/API-addDeshid', verifytoken, addDeshid);
router.post('/API-delDeshid', verifytoken, delDeshid);
router.get('/API-getDeshid', verifytoken, getDeshid);
router.get('/API-getDato', verifytoken, getDato);
router.get('/API-getAllDato', verifytoken, getAllDato);
router.get('/API-startProcess', verifytoken, startProcess);
router.get('/API-stopProcess', verifytoken, stopProcess);
router.get('/API-act', verifytoken, act);




//dev

const { getUsers, delUser, getAllConsultas } = require ('../controllers/dev.controller');

router.get('/dev-GET-users', getUsers);
router.post('/dev-DEL-users', delUser);
router.get('/dev-GET-Allconsultas', getAllConsultas);


module.exports = router;
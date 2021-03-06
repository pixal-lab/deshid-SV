const { Router } = require('express');

const cors = require('cors');
const router = Router();
router.use(cors());

const {
    register,
    modRegister,
    login,
    addConsulta,
    delConsulta,
    getConsultas,
    getUnsolveConsultas,
    solveConsulta,
    addDato,
    addDeshid,
    linkDeshid,
    deslinkDeshid,
    getDeshid,
    getDato,
    getAllDato,
    startProcess,
    stopProcess,
    act,
    verifytoken
} = require('../controllers/index.controller');

router.post('/API-registro', register);
router.post('/API-MOD-registro', verifytoken, modRegister);
router.post('/API-login', login);

router.post('/API-addConsulta', verifytoken, addConsulta);
router.post('/API-delConsulta', verifytoken, delConsulta);
router.get('/API-getConsultas', verifytoken, getConsultas);
router.get('/API-getUnsoCons', verifytoken, getUnsolveConsultas);
router.post('/API-solveConsulta', verifytoken, solveConsulta);

router.post('/API-addDeshid', verifytoken, addDeshid);
router.post('/API-linkDeshid', verifytoken, linkDeshid);
router.post('/API-deslinkDeshid', verifytoken, deslinkDeshid);
router.get('/API-getDeshid', verifytoken, getDeshid);

router.post('/API-startProcess', verifytoken, startProcess);
router.post('/API-stopProcess', verifytoken, stopProcess);

router.post('/API-addDato', addDato);
router.get('/API-act', verifytoken, act);

router.post('/API-getDato', verifytoken, getDato);
router.post('/API-getAllDato', verifytoken, getAllDato);


//dev

const { getUsers, delUser, getAllConsultas } = require ('../controllers/dev.controller');

router.get('/dev-GET-users', getUsers);
router.post('/dev-DEL-users', delUser);
router.get('/dev-GET-Allconsultas', getAllConsultas);


module.exports = router;
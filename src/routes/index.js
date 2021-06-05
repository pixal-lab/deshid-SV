const { Router } = require('express');
const router = Router();

const { register } = require('../controllers/index.controller');

router.post('/API-registro', register);






//dev

const { getUsers, delUser } = require ('../controllers/dev.controller');

router.get('/dev-GET-users', getUsers);
router.post('/dev-DEL-users', delUser);

module.exports = router;
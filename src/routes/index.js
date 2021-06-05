const { Router } = require('express');
const router = Router();

const { register } = require('../controllers/index.controller');

router.post('/API-registro', register);






//dev

const { getUsers } = require ('../controllers/dev.controller');

router.get('/dev-GET-users', getUsers);

module.exports = router;
const { Router } = require('express');
const router = Router();

const { getUsers, register } = require('../controllers/index.controller');


router.get('/users', getUsers);
router.get('/api/register', register);




module.exports = router;
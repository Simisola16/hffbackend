const express = require('express');
const router = express.Router();
const grantInfoController = require('../Controllers/grantInfoController');
const auth = require('../Middlewares/auth');

router.get('/', grantInfoController.getGrantInfo);
router.post('/', auth, grantInfoController.updateGrantInfo);

module.exports = router;

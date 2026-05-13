const express = require('express');
const router = express.Router();
const grantController = require('../Controllers/grantApplicationController');
const auth = require('../Middlewares/auth');

// Public route to submit an application
router.post('/', grantController.createApplication);

// Admin only routes
router.get('/', auth, grantController.getAllApplications);
router.patch('/:id', auth, grantController.updateApplication);
router.delete('/:id', auth, grantController.deleteApplication);

module.exports = router;

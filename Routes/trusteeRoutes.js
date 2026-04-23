const express = require('express');
const router = express.Router();
const trusteeController = require('../Controllers/trusteeController');
const { upload } = require('../Config/cloudinary');
const auth = require('../Middlewares/auth');

router.get('/', trusteeController.getTrustees);
router.get('/:id', trusteeController.getTrusteeById);
router.post('/', auth, upload('trustees').single('image'), trusteeController.createTrustee);
router.put('/:id', auth, upload('trustees').single('image'), trusteeController.updateTrustee);
router.delete('/:id', auth, trusteeController.deleteTrustee);

module.exports = router;

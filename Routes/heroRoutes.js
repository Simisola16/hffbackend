const express = require('express');
const router = express.Router();
const heroController = require('../Controllers/heroController');
const { upload } = require('../Config/cloudinary');
const auth = require('../Middlewares/auth');

router.get('/', heroController.getHeroes);
router.get('/:id', heroController.getHeroById);
router.post('/', auth, upload('hero').single('image'), heroController.createHero);
router.put('/:id', auth, upload('hero').single('image'), heroController.updateHero);
router.delete('/:id', auth, heroController.deleteHero);

module.exports = router;

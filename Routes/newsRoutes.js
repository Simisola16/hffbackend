const express = require('express');
const router = express.Router();
const newsController = require('../Controllers/newsController');
const { upload } = require('../Config/cloudinary');
const auth = require('../Middlewares/auth');

router.get('/', newsController.getNews);
router.get('/:id', newsController.getNewsById);
router.post('/', auth, upload('news').single('image'), newsController.createNews);
router.put('/:id', auth, upload('news').single('image'), newsController.updateNews);
router.delete('/:id', auth, newsController.deleteNews);

module.exports = router;

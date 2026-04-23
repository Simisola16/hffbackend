const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = (folder) => new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: `HFF/${folder}`,
        allowed_formats: ['jpg', 'png', 'jpeg', 'webp']
    }
});

const upload = (folder) => multer({ storage: storage(folder) });

module.exports = { cloudinary, upload };

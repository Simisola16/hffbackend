const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false, default: '' },
    date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('News', newsSchema);

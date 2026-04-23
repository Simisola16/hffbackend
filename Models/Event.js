const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String },
    image: { type: String, required: true },
    date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);

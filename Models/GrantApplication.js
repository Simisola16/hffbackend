const mongoose = require('mongoose');

const grantApplicationSchema = new mongoose.Schema({
    applicantName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    projectTitle: { type: String, required: true },
    description: { type: String, required: true },
    amountRequested: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ['Pending', 'Approved', 'Rejected'], 
        default: 'Pending' 
    },
    submissionDate: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('GrantApplication', grantApplicationSchema);

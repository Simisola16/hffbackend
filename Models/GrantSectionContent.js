const mongoose = require('mongoose');

const GrantSectionContentSchema = new mongoose.Schema({
    title: { type: String, default: 'Grant Applications' },
    intro: { type: String, required: true },
    applyTitle: { type: String, default: 'Apply For The Grant' },
    applyText: { type: String, required: true },
    deadlines: [{ type: String }],
    requirementsTitle: { type: String, default: 'Application Requirements' },
    requirementsText: { type: String, required: true },
    importantNotes: [{ type: String }],
    processSteps: [{
        icon: String,
        title: String,
        description: String
    }]
}, { timestamps: true });

module.exports = mongoose.model('GrantSectionContent', GrantSectionContentSchema);

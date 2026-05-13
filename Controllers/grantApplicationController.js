const GrantApplication = require('../Models/GrantApplication');

// @desc    Get all grant applications
// @route   GET /api/grant
// @access  Private/Admin
exports.getAllApplications = async (req, res) => {
    try {
        const applications = await GrantApplication.find().sort({ createdAt: -1 });
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a grant application
// @route   POST /api/grant
// @access  Public
exports.createApplication = async (req, res) => {
    try {
        const application = new GrantApplication(req.body);
        const savedApplication = await application.save();
        res.status(201).json(savedApplication);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update application
// @route   PATCH /api/grant/:id
// @access  Private/Admin
exports.updateApplication = async (req, res) => {
    try {
        const application = await GrantApplication.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!application) return res.status(404).json({ message: 'Application not found' });
        res.status(200).json(application);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete application
// @route   DELETE /api/grant/:id
// @access  Private/Admin
exports.deleteApplication = async (req, res) => {
    try {
        const application = await GrantApplication.findByIdAndDelete(req.params.id);
        if (!application) return res.status(404).json({ message: 'Application not found' });
        res.status(200).json({ message: 'Application deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

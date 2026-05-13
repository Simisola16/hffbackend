const GrantSectionContent = require('../Models/GrantSectionContent');

// @desc    Get grant section content
// @route   GET /api/grant-info
// @access  Public
exports.getGrantInfo = async (req, res) => {
    try {
        let content = await GrantSectionContent.findOne();
        if (!content) {
            // Return empty or default if none found
            return res.status(200).json({});
        }
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update grant section content
// @route   POST /api/grant-info
// @access  Private/Admin
exports.updateGrantInfo = async (req, res) => {
    try {
        let content = await GrantSectionContent.findOne();
        if (content) {
            content = await GrantSectionContent.findByIdAndUpdate(content._id, req.body, { new: true });
        } else {
            content = new GrantSectionContent(req.body);
            await content.save();
        }
        res.status(200).json(content);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

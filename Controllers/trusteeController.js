const Trustee = require('../Models/Trustee');

exports.getTrustees = async (req, res) => {
    try {
        const trustees = await Trustee.find().sort('order');
        res.json(trustees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};exports.getTrusteeById = async (req, res) => {
    try {
        const trustee = await Trustee.findById(req.params.id);
        if (!trustee) return res.status(404).json({ message: 'Trustee not found' });
        res.json(trustee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createTrustee = async (req, res) => {
    try {
        const { name, position, bio, order } = req.body;
        const image = req.file ? req.file.path : '';
        const trustee = new Trustee({ name, position, bio, image, order });
        await trustee.save();
        res.status(201).json(trustee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateTrustee = async (req, res) => {
    try {
        const { name, position, bio, order } = req.body;
        const updateData = { name, position, bio, order };
        if (req.file) updateData.image = req.file.path;
        const trustee = await Trustee.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.json(trustee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteTrustee = async (req, res) => {
    try {
        await Trustee.findByIdAndDelete(req.params.id);
        res.json({ message: 'Trustee deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

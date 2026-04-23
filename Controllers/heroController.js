const Hero = require('../Models/Hero');
const { cloudinary } = require('../Config/cloudinary');

exports.getHeroes = async (req, res) => {
    try {
        const heroes = await Hero.find().sort('order');
        res.json(heroes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getHeroById = async (req, res) => {
    try {
        const hero = await Hero.findById(req.params.id);
        if (!hero) return res.status(404).json({ message: 'Hero not found' });
        res.json(hero);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createHero = async (req, res) => {
    try {
        const { title, subtitle, order } = req.body;
        const image = req.file ? req.file.path : '';
        const hero = new Hero({ title, subtitle, image, order });
        await hero.save();
        res.status(201).json(hero);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateHero = async (req, res) => {
    try {
        const { title, subtitle, order } = req.body;
        const updateData = { title, subtitle, order };
        if (req.file) updateData.image = req.file.path;
        const hero = await Hero.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.json(hero);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteHero = async (req, res) => {
    try {
        await Hero.findByIdAndDelete(req.params.id);
        res.json({ message: 'Hero deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

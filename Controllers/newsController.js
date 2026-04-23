const News = require('../Models/News');

exports.getNews = async (req, res) => {
    try {
        const news = await News.find().sort('-date');
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getNewsById = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) return res.status(404).json({ message: 'News not found' });
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createNews = async (req, res) => {
    try {
        const { title, description, date } = req.body;
        const image = req.file ? req.file.path : '';
        const news = new News({ title, description, image, date });
        await news.save();
        res.status(201).json(news);
    } catch (error) {
        console.error('Create News Error:', error);
        res.status(400).json({ message: error.message });
    }
};

exports.updateNews = async (req, res) => {
    try {
        const { title, description, date } = req.body;
        const updateData = { title, description, date };
        if (req.file) updateData.image = req.file.path;
        const news = await News.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.json(news);
    } catch (error) {
        console.error('Update News Error:', error);
        res.status(400).json({ message: error.message });
    }
};

exports.deleteNews = async (req, res) => {
    try {
        await News.findByIdAndDelete(req.params.id);
        res.json({ message: 'News deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

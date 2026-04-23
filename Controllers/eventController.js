const Event = require('../Models/Event');

exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find().sort('-createdAt');
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createEvent = async (req, res) => {
    try {
        const { title, date } = req.body;
        const image = req.file ? req.file.path : '';
        const event = new Event({ title, image, date });
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        res.json({ message: 'Event deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

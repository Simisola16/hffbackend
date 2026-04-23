require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');
const User = require('../Models/User');

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const adminExists = await User.findOne({ email: 'admin@halal.com' });
        if (!adminExists) {
            const admin = new User({
                email: 'admin@halal.com',
                password: 'password123',
                name: 'Main Admin'
            });
            await admin.save();
            console.log('Admin user seeded: admin@halal.com / password123');
        } else {
            console.log('Admin user already exists');
        }
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedAdmin();

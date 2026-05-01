require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');
const User = require('../Models/User');

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const adminExists = await User.findOne({ email: 'admin@halal.com' });
        if (!adminExists) {
            await new User({
                email: 'admin@halal.com',
                password: 'password123',
                name: 'Main Admin'
            }).save();
            console.log('Admin user seeded: admin@halal.com / password123');
        }

        const wliExists = await User.findOne({ email: 'wli@halal.com' });
        if (!wliExists) {
            await new User({
                email: 'wli@halal.com',
                password: 'abc123',
                name: 'Wli Admin'
            }).save();
            console.log('Admin user seeded: wli@halal.com / abc123');
        } else {
            console.log('Admin users already exist');
        }
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedAdmin();

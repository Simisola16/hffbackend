require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');
const Trustee = require('../Models/Trustee');
const Hero = require('../Models/Hero');
const Event = require('../Models/Event');
const News = require('../Models/News');

const trustees = [
    {
        name: "Dr Abdul Matin Khan",
        position: "Trustee",
        bio: "Having acquired the highest professional qualifications in Finance, Accounting and Administration in the UK as Chartered Management Accountant and Chartered Company Secretary and Administrator, Dr Khan has worked at senior management positions in Asia, Africa and Europe. Dr Khan has been involved with the HFA since its inception as one of the founding members of the BOT.",
        image: "./image/drMartin1.webp",
        order: 1
    },
    {
        name: "Dr Ghayasuddin Siddiqui",
        position: "Trustee",
        bio: "Dr Ghayasuddin Siddiqui, a PhD in Chemistry is a well-known activist, campaigner, writer and expert on Muslim political thought. Dr Siddiqui has promoted dialogue and engagement across all barriers: religious, social, cultural and political; and was the founding chairman of the Halal Food Authority.",
        image: "./image/drSiddque1.webp",
        order: 2
    },
    {
        name: "Mr Ehsan Choudhry",
        position: "Trustee",
        bio: "Ehsan Choudhry is a graduate in Urdu, a General Secretary of Pakistan Welfare Association Hounslow, a research scholar and a world famous poet and author of seven books. Topping all of that with a heart of gold, Ehsan is also a pioneer volunteer of HFA since 1995 , the owner of an established business and a responsible journalist in the UK.",
        image: "./image/mrChoudary.webp",
        order: 3
    },
    {
        name: "Mr Ahmed Latif",
        position: "Trustee",
        bio: "Mr Ahmed Latif is presently CEO of A & M International Limited, which is a metal trading company and part of AMIDT Group of Dubai. Mr Latif Graduated in Commerce in 1963 from Karachi University and secured First Class First Position and was also awarded Gold Medal for his academic achievements. Mr Latif is also a member of Lions Club and spends great deal of his time in charitable work.",
        image: "./image/mrLatif.webp",
        order: 4
    }
];

const heroes = [
    {
        title: "The Halal Food Foundation (HFF)",
        subtitle: "is a not for profit, registered UK charity (1139457). We aim to make the concept of 'halal' more accessible and well known to the public through training schemes, workshops, food festivals and educational material.",
        image: "./image/ev3.webp",
        order: 1
    },
    {
        title: "Promoting Halal Education",
        subtitle: "Through education, training and community engagement, we empower individuals and organisations to make informed decisions about halal living.",
        image: "./image/ev2.webp",
        order: 2
    },
    {
        title: "Authentic Halal Standards",
        subtitle: "Upholding the highest standards of halal integrity through strategic guidance and commitment to authentic halal practices worldwide.",
        image: "./image/ev5.webp",
        order: 3
    }
];

const events = [
    { title: "HFA Webinar 2020", image: "./image/ev-1.jpg" },
    { title: "International Halal Conference", image: "./image/ev2.webp" },
    { title: "Meat Economics Workshop", image: "./image/ev3.webp" },
    { title: "Halal Food Festival", image: "./image/ev4.webp" },
    { title: "Halal Certification Workshop", image: "./image/ev5.webp" },
    { title: "Industry Panel Discussion", image: "./image/ev6.webp" }
];

const news = [
    {
        title: "New Halal Standards for Food Processing",
        description: "HFF releases updated guidelines for food processing facilities seeking Halal certification to align with international standards.",
        image: "./image/ev4.webp",
        date: new Date("2024-06-15")
    },
    {
        title: "Partnership with Saudi Food Authority",
        description: "HFF signs MoU with Saudi Food and Drug Authority to streamline Halal certification for UK exporters.",
        image: "./image/ev2.webp",
        date: new Date("2024-05-28")
    }
];

async function seedData() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        await Trustee.deleteMany({});
        await Trustee.insertMany(trustees);
        console.log('Trustees seeded');

        await Hero.deleteMany({});
        await Hero.insertMany(heroes);
        console.log('Hero slides seeded');

        await Event.deleteMany({});
        await Event.insertMany(events);
        console.log('Events seeded');

        await News.deleteMany({});
        await News.insertMany(news);
        console.log('News seeded');

        console.log('All data seeded successfully!');
        process.exit();
    } catch (error) {
        console.error('Seeding error:', error);
        process.exit(1);
    }
}

seedData();

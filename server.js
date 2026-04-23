require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./Config/db');

// Import Routes
const authRoutes = require('./Routes/authRoutes');
const heroRoutes = require('./Routes/heroRoutes');
const trusteeRoutes = require('./Routes/trusteeRoutes');
const eventRoutes = require('./Routes/eventRoutes');
const newsRoutes = require('./Routes/newsRoutes');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/hero', heroRoutes);
app.use('/api/trustee', trusteeRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/news', newsRoutes);

app.get('/', (req, res) => {
    res.send('HFF Backend API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

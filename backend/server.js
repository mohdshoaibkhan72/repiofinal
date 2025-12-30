require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
const applicationRoutes = require('./routes/applications');
const partnerRoutes = require('./routes/partners');

app.use('/api/applications', applicationRoutes);
app.use('/api/partners', partnerRoutes);

app.get('/', (req, res) => {
    res.send('Rupivo Backend is running properly');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

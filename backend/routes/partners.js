const express = require('express');
const router = express.Router();
const Partner = require('../models/Partner');

// POST /api/partners - Register a new partner
router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, mobile, city, profession } = req.body;

        // Basic Validation
        if (!firstName || !mobile || !city) {
            return res.status(400).json({ error: 'Please provide all required fields' });
        }

        const newPartner = new Partner({
            firstName,
            lastName,
            mobile,
            city,
            profession
        });

        const savedPartner = await newPartner.save();
        res.status(201).json(savedPartner);
    } catch (error) {
        console.error('Error registering partner:', error);
        res.status(500).json({ error: 'Server error registering partner' });
    }
});

// GET /api/partners - Get all partners
router.get('/', async (req, res) => {
    try {
        const partners = await Partner.find().sort({ createdAt: -1 });
        res.json(partners);
    } catch (error) {
        console.error('Error fetching partners:', error);
        res.status(500).json({ error: 'Server error fetching partners' });
    }
});

module.exports = router;

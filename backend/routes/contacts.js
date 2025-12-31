const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST: Submit a new contact inquiry
router.post('/', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET: Get all contact inquiries (For Admin Panel)
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT: Update status (For Admin Panel)
router.put('/:id', async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );
        res.json(updatedContact);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

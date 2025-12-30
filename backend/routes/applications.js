const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// POST: Submit a new application (The form)
router.post('/', async (req, res) => {
    try {
        const newApp = new Application(req.body);
        const savedApp = await newApp.save();
        res.status(201).json(savedApp);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET: Get all applications (For Admin Panel)
router.get('/', async (req, res) => {
    try {
        const apps = await Application.find().sort({ createdAt: -1 });
        res.json(apps);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT: Update status (For Admin Panel)
router.put('/:id', async (req, res) => {
    try {
        const updatedApp = await Application.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );
        res.json(updatedApp);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

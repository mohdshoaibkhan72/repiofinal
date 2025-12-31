const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// POST: Submit a new application or check for existing
router.post('/', async (req, res) => {
    try {
        const { phone, fullName } = req.body;

        // Check if application exists with this phone number
        const existingApp = await Application.findOne({ phone });

        if (existingApp) {
            // If it's a full submission (Step 2), update the existing record
            if (fullName) {
                const updatedApp = await Application.findOneAndUpdate(
                    { phone },
                    req.body,
                    { new: true }
                );
                return res.status(200).json(updatedApp);
            }
            // If it's just a Step 1 check, return conflict/status
            else {
                return res.status(409).json({ error: 'You have already applied with this mobile number.' });
            }
        }

        // If not found, create new
        // Note: We'll allow partial creation for Step 1 by passing defaults if needed, 
        // but robustly we rely on the frontend sending valid data for Step 2.
        // For Step 1 (just phone), we might save a "lead".

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

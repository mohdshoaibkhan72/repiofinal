const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    fullName: { type: String, required: false },
    email: { type: String, required: false },
    phone: { type: String, required: true },
    loanAmount: { type: Number, required: false },
    purpose: { type: String },
    status: { type: String, default: 'pending', enum: ['pending', 'approved', 'rejected'] },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);

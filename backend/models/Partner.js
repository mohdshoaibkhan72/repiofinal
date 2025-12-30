const mongoose = require('mongoose');

const PartnerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobile: { type: String, required: true },
    city: { type: String, required: true },
    profession: { type: String, default: 'Other' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Partner', PartnerSchema);

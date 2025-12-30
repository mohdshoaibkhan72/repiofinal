require('dotenv').config();
const mongoose = require('mongoose');
const Application = require('./models/Application');
const Partner = require('./models/Partner');

const dummyApplications = [
    {
        fullName: "Rahul Kumar",
        email: "rahul@example.com",
        phone: "9876543210",
        loanAmount: 50000,
        purpose: "Personal Use",
        status: "pending"
    },
    {
        fullName: "Priya Sharma",
        email: "priya@example.com",
        phone: "9876543211",
        loanAmount: 100000,
        purpose: "Home Renovation",
        status: "approved"
    },
    {
        fullName: "Amit Singh",
        email: "amit@example.com",
        phone: "9876543212",
        loanAmount: 200000,
        purpose: "Business Expansion",
        status: "rejected"
    }
];

const dummyPartners = [
    {
        firstName: "Vikram",
        lastName: "Malhotra",
        mobile: "9988776655",
        city: "Mumbai",
        profession: "Financial Advisor"
    },
    {
        firstName: "Sneha",
        lastName: "Reddy",
        mobile: "8877665544",
        city: "Bangalore",
        profession: "Insurance Agent"
    }
];

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Clear existing data (Optional: comment out if you want to keep existing data)
        await Application.deleteMany({});
        await Partner.deleteMany({});
        console.log('Cleared existing data');

        // Insert new data
        await Application.insertMany(dummyApplications);
        console.log('Inserted dummy applications');

        await Partner.insertMany(dummyPartners);
        console.log('Inserted dummy partners');

        console.log('Database seeded successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedData();

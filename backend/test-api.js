// const fetch = require('node-fetch'); // Removed as Node 18+ has native fetch


// Since we are likely on a recent Node version, fetch should be global.
// If not, we will use http.

async function testBackend() {
    console.log('--- Testing Backend API ---');

    const dummyData = {
        fullName: "Rahul Dravid",
        email: "rahul.d@example.com",
        phone: "9988776655",
        loanAmount: "100000",
        purpose: "Home Renovation Integration Test"
    };

    try {
        // 1. POST Request
        console.log('\n1. Sending POST request to /api/applications...');
        const postRes = await fetch('http://localhost:5000/api/applications', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dummyData)
        });

        if (!postRes.ok) {
            const errText = await postRes.text();
            throw new Error(`POST failed: ${postRes.status} ${errText}`);
        }

        const postData = await postRes.json();
        console.log('✅ POST Success! Created Application:', postData);
        const newId = postData._id;

        // 2. GET Request
        console.log('\n2. Sending GET request to /api/applications...');
        const getRes = await fetch('http://localhost:5000/api/applications');
        const getData = await getRes.json();

        console.log(`✅ GET Success! Retrieved ${getData.length} applications.`);
        const found = getData.find(app => app._id === newId);
        if (found) {
            console.log('✅ Verified: The submitted application was found in the list.');
        } else {
            console.error('❌ Error: Submitted application not found in list.');
        }

    } catch (err) {
        console.error('❌ Test Failed:', err.message);
    }
}

testBackend();

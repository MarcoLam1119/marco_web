const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());

// Simple in-memory storage (use a proper database in production)
const records = [];

app.post('/save', (req, res) => {
    const { userId, timestamp } = req.body;
    records.push({ userId, timestamp });
    console.log(`Saved: User ID - ${userId}, Timestamp - ${timestamp}`);
    res.send({ success: true });
});

app.get('/records', (req, res) => {
    res.send(records);
});

// Start the server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
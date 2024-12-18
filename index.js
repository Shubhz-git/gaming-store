const express = require('express');
const metrics = require('./prometheus');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Sample API route for products
app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 }
  ]);
});

// Metrics endpoint
app.use('/metrics', metrics);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all origins
app.use(cors()); 

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/api/login', (req, res) => {
    const { username } = req.body;
    console.log("Received username:", username);
  
    // Here, you would typically handle authentication logic.
    // For now, we just send a response back.
    res.json({ message: `Welcome, ${username}!` });
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

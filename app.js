const express = require('express');
const path = require('path');

const app = express();

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Default route  
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Jalvitaran clone running at http://localhost:${PORT}`);
});


// Export the app for testing purposs


const express = require('express');
const app = express();
const path = require('path');

// Route per gestire la richiesta "hi"
app.get('/hi', (req, res) => {
  const htmlContent = `
    <html>
      <head><title>Hi Response</title></head>
      <body>
        <h1>Hi my dear</h1>
        <img src="/image" alt="Greeting Image" style="width:300px; height:auto;">
      </body>
    </html>
  `;
  res.send(htmlContent);
});

// Route per l'immagine
app.get('/image', (req, res) => {
  res.sendFile(path.join(__dirname, 'https://imgur.com/CGGENCx')); // Sostituisci 'your_image.jpg' con il nome dell'immagine
});

// Avvia il server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});


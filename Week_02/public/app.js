const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the public directory under /static route
app.use('/static', express.static(path.join(__dirname, 'public')));

// Serve specific files directly from the root URL
app.get('/hello.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'hello.html'));
});

app.get('/kitten.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'kitten.html'));
});

app.get('/images/bg.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'bg.png'));
});

app.get('/images/kitten.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'kitten.jpg'));
});

// Example routes
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/', (req, res) => {
  res.send('Got a POST request')
});

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
});

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

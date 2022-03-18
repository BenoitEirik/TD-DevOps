'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express(); 
app.get('/my-app-2', (req, res) => {
  res.send('Hello World, node2\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

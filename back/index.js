const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

// Assuming your "express" folder is located outside the "back" folder
const frontFolderPath = path.join(__dirname, '../front');

app.use(express.json());
app.use(express.static(frontFolderPath));

// Default URL for the website
app.use('/', function(req, res){
    res.sendFile(path.join(frontFolderPath, 'index.html'));
});

const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
    console.debug('Server listening on port ' + port);
});


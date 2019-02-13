const path = require('path');
const express = require('express');

const app = express()

const staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

app.listen(3000, function() {
    console.log('listening');
})
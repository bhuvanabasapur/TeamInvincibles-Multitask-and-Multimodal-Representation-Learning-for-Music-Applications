const express = require('express');
const path = require('path');
const request = require("request");
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Frontend-Server is listening on port ' + port);
});

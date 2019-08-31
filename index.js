const express = require('express');
const path = require('path');

const app = express();


// An api endpoint that returns a short list of items
app.get('/', (req,res) => {
    res.send("root route")
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
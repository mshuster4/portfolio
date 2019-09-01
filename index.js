const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const path = require('path');

const app = express();

app.use(sslRedirect());

app.use(sslRedirect([
'development',
'production'
]));

// An api endpoint that returns a short list of items
app.get('/', (req,res) => {
    res.send("Hello World")
});

app.use(sslRedirect(['production'], 301));

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

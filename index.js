require("dotenv").config();

const sslRedirect = require('heroku-ssl-redirect');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;

const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(sslRedirect());

app.use(sslRedirect([
'development',
'production'
]));

app.use(sslRedirect(['production'], 301));

app.use(express.static(path.join(__dirname, 'client/build')));

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


app.listen(port);

console.log('App is listening on port ' + port);

const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const path = require('path');

const app = express();

app.use(sslRedirect());

app.use(sslRedirect([
'development',
'production'
]));

app.use(sslRedirect(['production'], 301));

app.use(express.static(path.join(__dirname, 'client/build')));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

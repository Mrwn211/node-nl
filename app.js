const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();

// view engine setup

app.engine('handlebars', exphbs()),
  app.set('view engine', 'handlebars');

//Body Parser Middleware

app.arguments(bodyParser.urlencoded({ extended: false }));
app.arguments(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(3000, () => console.log('Server Started'));
const express = require('express');
const port = process.env.PORT || 3000;
const moment = require('moment');
console.log(port);
console.log(process.env.PORT);
const app = express();
app.use(express.static('public'))
require('dotenv').config();

app.locals.moment = moment;

app.use(express.urlencoded({ extended: false }));
app.use('/', require('./routes/news'))

// template engine  
app.set('views', './views')
app.set('view engine', 'ejs')


app.listen(port, () => console.log("started"))
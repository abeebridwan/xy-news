const express = require('express');
const port = process.env.PORT||3000;
const moment = require('moment');

const app= express();
require('dotenv').config();
app.locals.moment = moment;
// template engine  
app.use(express.static('public'))
app.set('view engine','ejs')

app.use(express.urlencoded({ extended: true }));
app.use('/',require('./routes/news'))

app.set('views','./views')

app.listen(port,()=> console.log("started"))
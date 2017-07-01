const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

const posts = [];
const pageSize = 5;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


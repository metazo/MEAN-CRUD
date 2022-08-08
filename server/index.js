const express = require('express');
const bodyParser = require('body-parser');
var employeeController = require('./controllers/employeeController');

const {mongoose} = require('./db.js');

const app = express();
app.use(bodyParser.json());

app.use('/employees', employeeController)

app.listen(5000, () => console.log('Server started at Port 5000'));
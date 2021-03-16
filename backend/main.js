const Joi = require('joi');
const morgan = require('morgan');
const express = require('express');

const app = express();

app.use(morgan('tiny'));
app.use(express.json());// it is like a middleware which will take the simple object and give the JSON parsed Object

//logging
morgan.token('host', function(req, res) {
  return req.hostname;
});

app.use(morgan(':method :host :url :status :param[id] :res[content-length] - :response-time ms'));

morgan.token('param', function(req, res, param) {
    return req.params[param];
});

// passing the object app as instance to /src/Customer.js
require('./src/Customer')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

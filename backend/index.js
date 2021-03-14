const Joi = require('joi');

const express = require('express');

const app = express();

app.use(express.json());// it is like a middleware which will take the simple object and give the JSON parsed Object

var customers = [
  {id : 1, name : "Arun" },
  {id : 2, name : "Kumar"}
]
//GET Method
app.get('/',(req,res) => {
  res.send('Hello');
});

app.get('/api/customers',(req,res) => {
  res.send(customers);
});

//RoutesParams
app.get('/api/customers/:id',(req,res) => {
  const customer = customers.find(x => x.id == parseInt(req.params.id));
  if(!customer) res.status(404).send(`The Customer with id : ${req.params.id} Not found.`);
  res.send(customer);
});

//QueryParams
app.get('/api/q/:id',(req,res) => {
  res.send(req.query);
});

// POST Method
app.post('/api/customers',(req,res) => {
  const customer = {
    id : customers.length +1,
    name : req.body.name //For working of this we need enable the parsing of JSON objects
  }
  customers.push(customer);
  res.send(customer);
});

// DELETE Method
app.delete('/api/customers',(req,res) => {
  if(!req.body.name || req.body.name == ""){
    res.status(400).send('BAD Request');
  }
  const customer = customers.find(x => x.name == req.body.name);
  if(!customer) res.status(404).send(`Customer with id : ${req.params.id} Not Found`);
  customers = customers.filter(item => item !== customer);
  res.status(200).send(`Customer with name : ${req.body.name} has been deleted`);
});

app.delete('/api/customers/:id',(req,res) => {
  const customer = customers.find(x => x.id == parseInt(req.params.id));
  if(!customer) res.status(404).send(`Customer with id : ${req.params.id} Not Found`);
  customers = customers.filter(item => item !== customer);
  res.send(customer);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

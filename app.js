const express = require('express');
const app = express();
const morgan = require('morgan');
const { items } = require('./fakeDb');


app.use(express.json());
app.use(morgan('dev'));


app.get('/items', function (req, res) {

  return res.json({ items: items });

  //items [{name: popsickles, price: 1.35}, {name: cherios, price: 3.40}]
});

app.post('/items', function (req, res) {
  if (req.body === undefined) throw new Error("bad request");
  const item = { name: req.body.name, price: req.body.price };
  console.log(item);
  items.push(item);


  return res.json(item)
});

module.exports = app;





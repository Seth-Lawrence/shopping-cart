"use strict";

const express = require("express");

const { items } = require('../fakeDb');
const { BadRequestError } = require("../expressError")
const router = new express.Router()


router.get('', function (req, res) {

  return res.json({ items: items });

  //items [{name: popsickles, price: 1.35}, {name: cherios, price: 3.40}]
});

router.post('', function (req, res) {
  if (req.body === undefined) throw new BadRequestError();
  const item = { name: req.body.name, price: req.body.price };
  console.log(item);
  items.push(item);

  return res.json({ added: item });
});

router.get("/:name", function (req, res) {
  const item = items.filter(item => item.name === req.params.name);
  return res.json(item);
});

router.patch("/:name", function (req, res) {
  const item = items.filter(item => item.name === req.params.name);
  item[0].name = req.body.name;
  item[0].price = req.body.price;

  const updatedItem = { name: item[0].name, price: item[0].price };
  return res.json({ updated: updatedItem });
});


router.delete('/:name', function (req, res) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].name === req.params.name) {
      items.splice(i, 1);
      break;
    }
  }

  return res.json({ message: 'Deleted' });

});

module.exports = router;
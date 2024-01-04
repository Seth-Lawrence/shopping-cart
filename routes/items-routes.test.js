"use strict";

const request = require("supertest");

const app = require("../app");
let db = require("../fakeDb");

let item = {name: "popsicle", price: "1.45"}

beforeEach(function(){
  db.items.push(item);

})

afterEach(function(){
  db.items = [];
});

/** GET /items - returns `{items: [name: popsicles, price: 1.45}]} */

describe("GET /cats", function(){
  it("Gets a list of items", async function(){
    const resp = await request(app).get('/items');
    expect(resp.body).toEqual({items: [item]});

  })
})

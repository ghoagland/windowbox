'use strict';


var expect = require('chai').expect;
var request = require('supertest');

var app = require('../index');
//var agent = request.agent(app);

var db = require('../db/db');
var Product = require('../db/models/Product');


describe('Product routes', () => {

  beforeEach(() => {
    return db.sync({ force: true })
  });

  describe('/api/products/', () => {

    const name = 'Product Name';
    const description = 'Best Plant Ever';
    const price = 12.99;
    const inventory = 100;
    const image = 'pretty';

    beforeEach(() => {
      return Product.create({
        name, description, price, inventory, image
      })
    })

    it('GET /api/products', () => {
      return request(app)
        .get('/api/products')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].name).to.be.equal('Product Name')
        })
    })
  })

})

describe('Individual product routes', () => {

  beforeEach(() => {
    return db.sync({ force: true })
  });

  describe('GET /api/products/:productId', function () {

    var excitingProduct;
    beforeEach(function () {

      var creatingProduct = [{
        name: 'Boring plant',
        description: 'This plant is boring',
        price: 12.00,
        inventory: 3,
        image: 'nice'
      }, {
        name: 'Exciting plant',
        description: 'This plant is exciting',
        price: 42.00,
        inventory: 5,
        image: 'cool'
      }, {
        name: 'Fragrant plant',
        description: 'This plant is fragrant',
        price: 32.00,
        inventory: 34,
        image: 'smelly'
      }]
        .map(data => Product.create(data));
      return Promise.all(creatingProduct)
        .then(createdProducts => {
          excitingProduct = createdProducts[1];
        });
    });

    it('returns the JSON of the article based on the id', function () {
      return request(app)
        .get('/api/products/' + excitingProduct.id)
        .expect(200)
        .expect(function (res) {
          if (typeof res.body === 'string') {
            res.body = JSON.parse(res.body);
          }
          expect(res.body.name).to.equal('Exciting plant');
        });

    });

  })
})

const router = require('express').Router()
const {Products} = require('../db/products')
module.exports = router

router.get('/', (req, res, next) => {
  Products.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'description', 'price', 'photo', 'quantity']
  })

    .then(products => res.json(products))
    .catch(next)
})

router.get('/:categoryId', (req, res, next) => {
    const id = req.params.categoryId;
    Products.findAll({
        where: {
            categoryID: id //some ID that matches succulents
        }
    })
    .then(category => res.json(category))
    .catch(next)
})

router.post('/:categoryId', (req, res, next) => {
  Products.create(req.body)
    .then(product => res.json(product))
    .catch(next)
})

router.put('/:categoryId/:itemId', (req, res, next) => {
    const itemId = req.params.itemId;
    Products.findById(itemId)
    //update attributes or just update????
      .updateAttributes(req.body)
      .then(updatedItem => res.json(updatedItem))
      .catch(next);
})

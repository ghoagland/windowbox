const router = require('express').Router()
const Product = require('../db/models/Product')
const Category = require('../db/models/Category')
module.exports = router

router.get('/', (req, res, next) => {
    Product.findAll({
        // explicitly select only the id and email fields - even though
        // users' passwords are encrypted, it won't help if we just
        // send everything to anyone who asks!
        // attributes: ['id', 'description', 'price', 'photo', 'quantity']
    })

        .then(product => res.json(product))
        .catch(next)
})

router.get('/:categoryId/itemId', (req, res, next) => {
    const id = req.params.categoryId;
    Product.findAll({
        where: {
            categoryId: id //some ID that matches succulents
        }
    })
        .then(category => res.json(category))
        .catch(next)
})

router.get('/:itemId', (req, res, next) => {
    const itemId = req.params.itemId;

    Product.findAll({
        where: {
            id: itemId //some ID that matches succulents
        }
    })
        .then(item => res.json(item))
        .catch(next)
})

router.post('/:categoryId', (req, res, next) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(next)
})

router.put('/:categoryId/:itemId', (req, res, next) => {
    const itemId = req.params.itemId;
   Product.findById(itemId)
        .then(updatedItem => updatedItem.update(req.body))
        .then(item => res.json(item))
        .catch(next)
})

router.delete('/:categoryId/:itemId',(req, res, next) => {
    const id=req.params.itemId
    Product.destroy({
        where:{
            id: id
        }
    })
    .then(item => res.json(item))
    .catch(next)
})

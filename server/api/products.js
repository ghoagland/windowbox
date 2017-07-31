const router = require('express').Router()
const Product = require('../db/models/Product')
const Category = require('../db/models/Category')
const Review = require('../db/models/Review')
module.exports = router

router.get('/', (req, res, next) => {
    const categoryId = req.query.categoryId;

    if (categoryId) {
        Product.findAll({
            where: {
                categoryId: categoryId,
            }
        })
            .then(category => res.json(category))
            .catch(next)
    } else {
        Product.findAll()
            .then(product => res.json(product))
            .catch(next)
    }
})

router.get('/:productId', (req, res, next) => {
    const productId = req.params.productId;
    Product.findById(productId)
        .then(category => res.json(category))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(next)
})

router.put('/:productId', (req, res, next) => {
    const productId = req.params.productId;
    Product.findById(productId)
        .then(updatedItem => updatedItem.update(req.body))
        .then(item => res.json(item))
        .catch(next)
})

router.delete('/:productId', (req, res, next) => {
    const productId = req.params.productId
    Product.destroy({
        where: {
            id: productId
        }
    })
        .then(item => res.json(item))
        .catch(next)
})
router.get('/:productId/reviews', (req, res, next) => {
    const id = req.params.productId
    Review.findAll({
        where: {
            productId: id
        }
    })
        .then(reviews => res.json(reviews))
        .catch(next)
})

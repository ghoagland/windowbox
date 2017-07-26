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
// DO NOT NEED AN ALL PRODUCTS PAGE (MAYBE WE DO??)
// router.post('/', (req, res, next) => {
//   Products.create({res.body})
//     .then(product => res.json(product))
//     .catch(next)
// })

// router.put('/', (req, res, next) => {
//     Products.
// })

router.get('/succulents', (req, res, next) => {
    Products.findAll({
        where: {
            categoryID: 1 //some ID that matches succulents
        }
    })
    .then(succulents => res.json(succulents))
    .catch(next)
})

router.use('/succulents', router)

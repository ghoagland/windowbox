const router = require('express').Router()
const { Order, OrderProduct, Product } = require('../db/models');

module.exports = router

router.get('/:userId', (req, res, next) => {
    Order.findOrCreate({
      where: {
        $or: [{ userId: req.params.userId },
        { sessionId: req.sessionID }],
        status: 'Created'
      },
      include: [{ model: Product }]
    })
    .spread(function (order) {
      res.json(order);
    })
    .catch(err => console.log(err));
})

//only happens when cart is initialized or a new product is added
router.post('/', (req, res, next) => {
    Order.findOrCreate({
      where: {
        $or: [{ userId: req.body.user.id },
        { sessionId: req.sessionID }],
        status: 'Created'
      },
      include: [{ model: OrderProduct, as: 'items' }]
    })
      .spread(function (order) {
        const [quantity, price, id] = req.body.product
        OrderProduct.create({ quantity, price, orderId: order.id, productId: id});
      })
      .catch(next);
})

const router = require('express').Router()
const { Order, OrderProduct } = require('../db/models');

module.exports = router

router.get('/', (req, res, next) => {
    Order.findOrCreate({
      where: {
        $or: [{ userId: req.user.Id },
        { sessionId: req.sessionID }],
        status: 'Created'
      },
      include: [{ model: OrderProduct, as: 'items' }]
    })
      .spread(function (order) {
        res.json(order);
      })
      .catch(next);
})

const Sequelize = require('sequelize')
const db = require('../db')

const OrderProduct = db.define('orderProduct', {
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }

})
module.exports = OrderProduct

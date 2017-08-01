const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
    status: {
        type: Sequelize.ENUM('Created', 'Processing', 'Cancelled', 'Completed'),
        allowNull: false
    },
    subtotal: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    sessionId: {
      type: Sequelize.STRING,
    }
}, {
  validate: {
    oneOfSessionOrUser: function() {
      if (!this.userId && !this.sessionId) {
        throw new Error('Must have either a user or a sessionId')
      }
    }
  }
})

module.exports = Order

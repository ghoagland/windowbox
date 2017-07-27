const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  inventory: {
    type: Sequelize.INTEGER,
   allowNull: false,
    validate: {
      min: 0
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://openclipart.org/download/237408/1452872213.svg'
  },
  categoryId: {
    type: Sequelize.INTEGER
  }
},
{

})

module.exports = Product

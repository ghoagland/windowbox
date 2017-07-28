const Sequelize = require('sequelize')
const db = require('../db')

const ProductCategory = db.define('productCategory', {
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
   // unique: true
  },
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})
module.exports = ProductCategory;

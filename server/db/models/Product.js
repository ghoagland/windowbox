const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
   // unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  inStock: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://openclipart.org/download/237408/1452872213.svg',
    validate: {
      isUrl: true
    }
  },

},
  {

  })

module.exports = Product


// module.exports.associations = (Product, {CartItem, Review, Order}) => {
//     //Product.belongsToMany(Order, {through: CartItem})
//     Product.hasMany(Review)
// }

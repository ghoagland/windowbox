const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
   // unique: true
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'https://openclipart.org/download/237408/1452872213.svg'
  }
})
module.exports = Category;

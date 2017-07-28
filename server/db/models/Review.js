const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {len: [10, 700]}
  },
  stars: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { min: 1, max: 5 }
  }
})

module.exports = Review;

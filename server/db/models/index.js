const User = require('./user')
const Product = require('./Product');
const Category = require('./Category');
const Review = require('./Review');
const ProductCategory = require('./ProductCategory');

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

 Product.belongsToMany(Category, { through: 'productCategory' } );
 Category.belongsToMany(Product, { through: 'productCategory' });

 //User.belongsToMany(Order);


Review.belongsTo(User);
Review.belongsTo(Product);

module.exports = {
  User,
  Product,
  Category,
  Review,
  ProductCategory
}

// GOALS
// - [X] finished added to cart
// - [ ] finish deploying -- secrets
// - [ ] work on checkout, order models & associations
//     - [ ]Add to cart functionality: .findOrCreate
// - [ ] update quantity in cart view
// - [ ] unauthenticated user cart persistence, check if there is a loggedin user id or session id in the db

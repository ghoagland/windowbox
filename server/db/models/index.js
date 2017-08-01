const User = require('./user')
const Product = require('./Product');
const Category = require('./Category');
const Review = require('./Review');
const ProductCategory = require('./ProductCategory');
const Order = require('./Order');
const OrderProduct = require('./OrderProduct')

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

Order.belongsTo(User)
User.hasMany(Order) //not sure if necessary; want to get order from User?

Product.belongsToMany(Order, {
  through: 'orderProduct',
  foriegnKey: 'productId',
})
Order.belongsToMany(Product, {through: 'orderProduct', foriegnKey: 'orderId'} )


Review.belongsTo(User);
Review.belongsTo(Product);

module.exports = {
  User,
  Product,
  Category,
  Review,
  ProductCategory,
  Order,
  OrderProduct
}

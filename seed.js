const Promise = require('bluebird');
const db = require('./server/db');
const models = require('./server/db/models');
const Product = models.Product;
const Category = models.Category;
const ProductCategory = models.ProductCategory;
const Review = models.Review;
const User = models.User;

const products = [
  {
    name: 'Jade Plant',
    description: 'Jade plant care is easy and simple. Many people enjoy growing jade plants in their homes and offices, and they are considered to be symbols of good luck.',
    imgUrl: 'https://maxpull-gdvuch3veo.netdna-ssl.com/wp-content/uploads/2010/01/jade-plants1.jpg',
    price: 9,
    inventory: 100,
  },
  {
    name: 'Prickly Pear',
    description: 'Opuntia, or Prickly Pear is a very large genus of cacti, varying in size from 2 inches tall (5 cm) miniature plants to 100 feet tall (30 m) trees. They are native from Canada, to Chile and Argentina. The genus has been split several times, but there doesn\'t seem to be a consensus yet on the best way to do that. The name Opuntia comes from the name of a Greek city.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Prickly_Pear_Closeup.jpg/220px-Prickly_Pear_Closeup.jpg',
    price: 25,
    inventory: 16,
  },
  {
    name: 'Vanilla Orchid',
    description: 'Vanilla planifolia, commonly known as the Vanilla Orchid, has low to moderate water needs. Vanilla requires humidity of at least 70% to thrive, and should be allowed to slightly dry out between waterings. Standing water on the leaves or in the substrate is a big no-no. The Vanilla Orchid has high light needs when kept inside - planting Vanilla planifolia in the upper reaches of the vivarium will help with this, as well as allowing them to dry out. This vining orchid requires some form of air circulation to do well - stagnant, damp air will quickly kill your plant. The Vanilla Orchid tends to grow in a long vine, which can carefully be cut to form new plants. It will take many, many years for the Vanilla orchid to reach blooming size, so don\'t count on it providing flowers for your viewing pleasure. This is the plant in which vanilla "beans" are harvested from.',
    imgUrl: 'http://www.tropical-plants-flowers-and-decor.com/images/vanorc.jpg',
    price: 30,
    inventory: 30,
  },
  {
    name: 'Monkey Orchid',
    description: 'It is sometimes called the monkey orchid because it resembles the face of a monkey. This common name is shared with orchis simia. Plant blooms from spring to fall with a single 10 cm wide flower. The plant blooms at any season with a single 5 cm successive flower. These fascinating flowers are also endowed with an unusual fragrance, the scent of a ripe orange.',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/736x/cc/cf/ec/cccfec02f5f027e0b6e2f4a895e8c304--monkey-orchid-rare-flowers.jpg',
    price: 40,
    inventory: 12,
  }
]

const categories = [
  {
    name: 'Succulents',
    image: null,
  },
  {
    name: 'Orchids',
    image: null,
  },
  {
    name: 'Gift Plants',
    image: null,
  },
  {
    name: 'Fruit Trees',
    image: null
  },
  {
    name: 'Carnivorous Plants',
    image: null
  },
  {
    name: 'Roses',
    image: null
  }
]

const productCategories = [
  {
    productId: 1,
    categoryId: 1
  },
  {
    productId: 1,
    categoryId: 3
  },
  {
    productId: 3,
    categoryId: 2
  },
  {
    productId: 2,
    categoryId: 3
  },
  {
    productId: 2,
    categoryId: 2
  },
  {
    productId: 4,
    categoryId: 2
  }
]

const reviews = [
  {
    text: 'great plant!',
    stars: 5,
    productId: 3,
    userId: 1
  },
  {
    text: 'made an excellent gift!',
    stars: 5,
    productId: 2,
    userId: 2
  }
];

const users = [
  {
    name: 'Bob Waffle',
    email: 'bwaffle@waffle.com',
    password: 'bobspw',
    salt: 'sosalty',
    googleId: '1234'
  },
  {
    name: 'Sally Pancake',
    email: 'spancake@pancake.com',
    password: 'sallyspw',
    salt: 'saltyyyy',
    googleId: '5678'
  }
];


db.sync({ force: true })

  .then(function () {
    return Promise.all(categories.map(category => Category.create(category)))
  })
  .then(function () {
    return Promise.all(products.map(product =>
      Product.create(product)))
  })
  .then(function () {
    return Promise.all(productCategories.map(productCategory => ProductCategory.create(productCategory)))
  })
  .then(function () {
    return Promise.all(users.map(user => User.create(user)))
  })
    .then(function () {
    return Promise.all(reviews.map(review => Review.create(review)))
  })
  .then(() => console.log('Finished seeding!'))
  .catch(err => console.error('There was a problem seeding.', err, err.stack));


const Promise = require('bluebird');
const db = require('./server/db');
const models = require('./server/db/models');
const Product = models.Product;
const Category = models.Category;
const ProductCategory = models.ProductCategory;
const Review = models.Review;
const User = models.User;
const Order = models.Order;
const OrderProduct = models.OrderProduct;

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
    name: 'Fuchsia Orchids',
    description: 'Graceful, exotic, and long-lasting, the orchid has symbolized integrity, nobility, and luxury for centuries. Our enduring, triple-spiked phalaenopsis in fuchsia, a color associated with abundance, captures the artistry and spirit of a natural orchid. It’s prized for its perfect blooms. Broad green leaves, vertical bamboo stakes, and a natural moss base add realism. This striking orchid is set in an elegant striated white ceramic pot.',
    imgUrl: 'http://demandware.edgesuite.net/aakh_prd/on/demandware.static/-/Sites-main/default/dw52d3d30e/images/large_gray/44-4545.jpg',
    price: 149,
    inventory: 50
  },
  {
    name: 'White Orchids',
    description: 'Graceful and exotic, the white orchid has symbolized integrity, nobility, and luxury for centuries. Our enduring, double-spiked phalaenopsis captures the artistry and spirit of natural orchids. It’s prized for its perfect blooms. Broad green leaves and a natural moss base add realism. This striking orchid is set in an elegant, striated white ceramic pot.',
    imgUrl: 'http://demandware.edgesuite.net/aakh_prd/on/demandware.static/-/Sites-main/default/dwd554e33c/images/large_gray/44-4544.jpg',
    price: 149,
    inventory: 50
  },
  {
    name: 'Petite Spotted Orchid',
    description: 'Our delightful version of the exquisite white phalaenopsis may be petite, but the stunning single orchid is eye-catching in any room. The diminutive variety is in full bloom, its fuchsia-spotted pattern making it appear even more lifelike—and lovely. It’s rooted in a natural-looking environment made of lava rocks and moss and displayed in a delicate clear glass vase.',
    imgUrl: 'http://demandware.edgesuite.net/aakh_prd/on/demandware.static/-/Sites-main/default/dw941fd439/images/large_gray/44-4540.jpg',
    price: 99,
    inventory: 50
  },
  {
    name: 'Blue Hydrangea Arrangement',
    description: 'Flower lovers of all kinds delight in the incomparable beauty of hydrangeas in full bloom. The fluffy, dome-shaped flowers on sturdy stems ramp up the allure of any garden with their variegated colors and lush foliage. This enduring arrangement captures the beauty and spirit of the powdery blue mophead hydrangea. The blunt-cut stems of this trio of blooms are arranged in a glass cylinder to create a tabletop watergarden of singular beauty.',
    imgUrl: 'http://demandware.edgesuite.net/aakh_prd/on/demandware.static/-/Sites-main/default/dw803eb0ee/images/large_gray/44-6375B.jpg',
    price: 99,
    inventory: 50
  },
  {
    name: 'Tall Peony Assortment',
    description: 'With dense, colorful blooms and contrasting dark green foliage, peonies are showstoppers in any garden. They flower in happy abandon. We think pinks are especially beautiful because their hues shift at different stages of bloom and in the changing light. This rich arrangement of exquisite bowl-shaped blossoms captures the peony\'s natural beauty-including those intriguing nuances of color. Their tall stems are twirled together to form a gorgeous bouquet.',
    imgUrl: 'http://demandware.edgesuite.net/aakh_prd/on/demandware.static/-/Sites-main/default/dw86fcdc90/images/large_gray/44-6383A.jpg',
    price: 99,
    inventory: 50
  },
  {
    name: 'Red Roses',
    description: 'A cup of roses a day keeps the blues away. Brighten up a corner or freshen up the look of a room with an elegant bunch of blooming red roses arranged in a dazzling julep cup.',
    imgUrl: 'http://demandware.edgesuite.net/aakh_prd/on/demandware.static/-/Sites-main/default/dw6280bb43/images/large_gray/44-5786B.jpg',
    price: 39,
    inventory: 50
  },
   {
    name: 'Dahlia Bunch',
    description: 'Dahlias are considered one of the most spectacular garden flowers. There is a great variety of form in dahlias, from the showy dinner-plate size to the bright, little single ones.',
    imgUrl: 'http://s7d1.scene7.com/is/image/terrain/43659895_000_a?$zoom2$',
    price: 45,
    inventory: 25,
  },
  {
    name: 'Succulent Triangle Planter',
    description: 'An exclusive collection of living, tender succulents fills this reclaimed wood planter with a contemporary, geometric shape. Each low-maintenance planting of mixed succulents is surrounded by woodland moss.',
    imgUrl: 'http://s7d1.scene7.com/is/image/terrain/43596873_040_a?$zoom2$',
    price: 65,
    inventory: 35,
  },
    {
    name: 'Barnacle Crosshatch bowl',
    description: 'A fantastic addition to your garden, each of these weathered planters features a distinct maritime texture. An antiqued glaze will continue to change over time, adding to the pot`/s character and authenticity, while high-fired earthenware offers durability, strength, and resistance to frost.',
    imgUrl: 'http://s7d1.scene7.com/is/image/terrain/37230224_012_a?$zoom2$',
    price: 65,
    inventory: 35,
  },
  {
    name: 'Living Succulent Triangle Planter',
    description: 'A terrain exclusive collection of living, tender succulents fills this reclaimed wood planter with a contemporary, geometric shape. Each low-maintenance planting of mixed succulents is surrounded by woodland moss.',
    imgUrl: 'http://s7d1.scene7.com/is/image/terrain/43596873_040_a?$zoom2$',
    price: 99,
    inventory: 50
  },
  {
    name: 'Earth Fired Clay Orchid Bowl',
    description: 'Using a primitive firing technique that has been refined over thousands of years, these clay orchid bowls are hand-crafted in Asia. Before firing, each piece is wrapped in linen and slowly dried, lending a beautifully imperfect, aged finish.',
    imgUrl: 'http://s7d1.scene7.com/is/image/terrain/36963544_004_a?$zoom2$',
    price: 39,
    inventory: 50
  },
    {
    name: 'White Hydrangea',
    description: 'Topped with pure white blooms, this elegant hydrangea arrives ready for display in a dotted metal pot topped with moss.',
    imgUrl: 'http://s7d1.scene7.com/is/image/terrain/42446963_010_a?$zoom2$',
    price: 45,
    inventory: 25,
  },
  {
    name: 'Blushing Hues Bouquet',
    description: 'A French Styled Hand Tied Bouquet of select Fuchsia, Hot PInk, and Purple Roses, Hydrangeas, and Peonies. This Bouquet will surely set an everlasting impression.',
    imgUrl: 'http://cdn.bloomnation.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/4/b460e94a70c3be371d6e8450cd852615.jpg',
    price: 65,
    inventory: 100
  },
  {
    name: 'Triple White Orchid Plant',
    description: 'A graceful three stemmed white phaleanopsis orchid plant potted in a modern bamboo container is an enchanting gift for any occasion.',
    imgUrl: 'http://cdn.bloomnation.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20160518123629_file_573bb90d8f4aa.jpg',
    price: 239,
    inventory: 20
  },
  {
    name: 'String of Pearls Plant',
    description: 'Senecio Rowleyanus (aka String of Pearls) has draping pea-like foliage. This trailing succulent requires a full sun position, ideally in a south facing window or conservatory. Well drained soil and the occasional drenching when the soil is completely dry is what this fella likes. If you have a bright, sunny spot, this could be the perfect plant to add to your collection.',
    imgUrl: 'https://static1.squarespace.com/static/531f5ef0e4b04cff11fe90d1/53209611e4b04709d61e9be3/5841bd4c8419c22815c22f55/1480704597097/IMG_6866.jpg?format=500w',
    price: 40,
    inventory: 50
  },
  {
    name: 'Asparagus Fern',
    description: 'One of our most popular plants in store, the common Asparagus  also known as Plumosus has delicate feathery foliage adding a  truly elegant dimension to you plant collection. Despite their appearance and common name they are not true ferns and their care is much easier as they are more tolerant of varying light, heat and watering levels . There preference is a bright well lit position and damp to touch soil.',
    imgUrl: 'https://static1.squarespace.com/static/531f5ef0e4b04cff11fe90d1/53209611e4b04709d61e9be3/5915ebfdd482e94b3f6009d6/1494609016349/IMG_2635.JPG?format=500w',
    price: 49,
    inventory: 60
  },
  {
    name: 'Rubber Plant',
    description: 'The Ficus Elastica is and old favourite, having large robust leaves, that offer a dramatic statement to a shelf or sideboard. The perfect plant for a living room, hallway of bedroom it requires a partial shade position and a weekly watering most of the year. Slightly more in the spring and summer whilst its growing and an easing off in winter. This a low maintenance plant that will grow significantly tall over the years. This one is a keeper.',
    imgUrl: 'https://static1.squarespace.com/static/531f5ef0e4b04cff11fe90d1/53209611e4b04709d61e9be3/5915dfc89f74565625de322c/1494605813881/Ficus+Elastica.jpg?format=500w',
    price: 36,
    inventory: 100
  },
  {
    name: 'Fresh Hydrangea Bunch',
    description: 'Each of these vibrant hydrangea bouquets arrives direct from our grower, brightly arrayed in a spectrum of garden hues.',
    imgUrl: 'http://s7d1.scene7.com/is/image/terrain/43659762_000_a?$zoom2$',
    price: 99,
    inventory: 30
  },
  {
    name: 'Long Stemmed Pink Roses',
    description: 'The ultimate long stemmed, blushing pink roses will be sure to make a lasting impression. One dozen per order.',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/736x/d9/3a/dc/d93adc5c2a223f77aa33967c5216075d--blush-roses-pink-roses.jpg',
    price: 70,
    inventory: 60
  },
  {
    name: 'Xerographica Air Plant',
    description: 'Tillandsia xerographica is a dry-forest air plant that is native to Central America. Like other bromeliads, it grows from a central rosette, radiating out it’s funky leaves, and promoting new growth and pups (baby air plants) from the base. Also, like other bromeliads, the growth is quite slow, taking years to reach the full size of approximately 3 feet in diameter - yes, feet. It is monocarpic, meaning that once it flowers, it dies, but not before making many pups.',
    imgUrl: 'https://cdn.shopify.com/s/files/1/0150/6262/products/xergraphic_air_plant.jpg?v=1490637885',
    price: 20,
    inventory: 60
  },
  {
    name: 'Marimo Moss Ball',
    description: 'The name of Marimo (毬藻, Aegagropila linnaei) originated from Japanese botanist Tatsuhiko Kawakami (毬 ‘mari’ = ball and 藻 ‘mo’ = generic term for aquatic plants). Native to previously glaciated areas of the world including Japan, Russia, Iceland, and parts of North America - the Marimo’s shape is the result of freshwater lake motion. Marimo moss, as it’s known, is not actually moss at all, but a freshwater, fuzzy, filamentous green algal colony that’s totally Instagram-worthy.',
    imgUrl: 'https://cdn.shopify.com/s/files/1/0150/6262/products/MiniMarimo_Product_c4661e79-2d03-41b1-8843-3b7d02f71bc2.jpg?v=1484760420',
    price: 10,
    inventory: 70
  },
  {
    name: 'Aloe Vera Plant',
    description: 'There are over 300 species of Aloe, but only one species is used for medicinal purposes- Aloe vera. Aloe vera, or true Aloe, is a member of the family Asphodelaceae, and has its origins in northern Africa. The specific origins of Aloe vera are quite murky, although they are believed to originate from the Arabian Peninsula and Egypt.',
    imgUrl: 'https://cdn.shopify.com/s/files/1/0150/6262/products/Aloe_Growpot.jpg?v=1496261558',
    price: 25,
    inventory: 80
  },
  {
    name: 'Miniature Succulent Assortment',
    description: 'Set of 6 assorted miniature succulents. Our Instagram-worthy miniature succulent sets are back by popular demand. Each set includes six assorted miniature easy-care succulents in nursery grow pots. Whether you have a small apartment, tiny desk, or just appreciate the little things - these fellas are the perfect fit.',
    imgUrl: 'https://cdn.shopify.com/s/files/1/0150/6262/products/Succulent_1.jpg?v=1492714852',
    price: 20,
    inventory: 100
  },
  {
    name: 'Meyer Lemon Tree',
    description: 'This tree is very heavy-bearing and will provide you with a larger number of lemons every year. Plus, it is self-pollinating, so you can grow fruit indoors or out. Your new Meyer Lemon tree fruits abundantly in winter.',
    imgUrl: 'https://www.brighterblooms.com/images/D.cache.dpthmbn/1334.jpg',
    price: 35,
    inventory: 60
  },
  {
    name: 'Dwarf Calamondin Orange Tree',
    description: 'Get ready to squeeze your own OJ without even walking outside! This variety grows well in a container, making it great for moving indoors during the winter months. This shiny, dark evergreen foliage provides a backdrop for fragrant white blossoms followed by small, juicy, tart oranges.',
    imgUrl: 'http://cdn.gardensalive.com/images/248/67385.jpg',
    price: 49,
    inventory: 30
  },
  {
    name: 'Potted Strawberry Plant',
    description: 'A strawberry plant is a wonderful addition to any outdoor area. Whether you have a large backyard, a small patio garden or something in between, it can do wonders for your space. A group of strawberry plants creates a beautiful, edible ground cover that will protect other plants in excessively sunny areas. They also produce runners as they grow, which will increase the size of your crops year after year.',
    imgUrl: 'https://ae01.alicdn.com/kf/HTB1PjHuNVXXXXaiXVXXq6xXFXXXQ/1000-pcs-font-b-strawberry-b-font-font-b-seeds-b-font-Potted-font-b-Strawberry.jpg',
    price: 19,
    inventory: 40
  },
  {
    name: 'Venus Fly Trap',
    description: 'Easily the most widely recognized carnivorous plant, the Venus flytrap is a true classic. With their fanged, gaping traps, and their truly remarkable feeding action, there is nothing else in the world like it. When an insect comes in contact with the tiny trigger-hairs inside of the Venus flytrap\'s mouth, the trap will shut in a fraction of a second. The insect will then be digested by the Venus flytrap over several days. Venus flytraps are temperate perennials, which means they require a Winter dormancy. During this time, your Venus flytrap\'s growth will slow or cease completely and the plant may appear to be completely dead.',
    imgUrl: 'https://img2.cgtrader.com/items/37339/b3454c7527/venus-fly-trap-in-white-pot-3d-model-obj.jpg',
    price: 29,
    inventory: 20
  },
  {
    name: 'Cape Sundew',
    description: 'Drosera capensis, also called the Cape sundew, is perhaps the perfect carnivorous plant for a beginner. Cape sundew grow large stems with many long, green leaves. The end of each leaf is covered in small, red tentacles with tiny droplets of mucilage on each one. When an insect becomes stuck to a cape sundew leaf, the leaf slowly curls around the trapped insect and digests it. Cape sundews produce flower stalks up to 12" tall with numerous showy, pink flowers. Drosera capensis grow year-round and can adapt to almost any condition.',
    imgUrl: 'https://a6adc47bb216dfe8a383-49bf67815854ec9e2c04a8f4abb9cbf5.ssl.cf3.rackcdn.com/images/products2/pl/20/00/02/76/pl2000027697_card3_lg.jpg',
    price: 25,
    inventory: 30
  },
  {
    name: 'Red Dragon Fly Trap',
    description: 'This flytrap features red leaves and traps. Young plants are bright red throughout. As the plant matures, it turns maroon with a green margin along the edge of the traps.',
    imgUrl: 'https://cdn3.volusion.com/hwnyj.vxqwe/v/vspfiles/photos/14031-3.jpg?1375515958',
    price: 29,
    inventory: 30
  },
  {
    name: 'Lola Succulent',
    description: 'Part of the Echeveria genus, this hybrid species forms a sculpted rosette with a rosebud shape. Its gray-green leaves have a delicate blush of pink. For planting, use a container with well-drained soil in full sunlight or an area with plenty of bright light. Water every 2 weeks and let the soil dry in-between watering.',
    imgUrl: 'https://cdn.shopify.com/s/files/1/0350/5665/products/Echeveria-Lola-3.5_web_grande.jpg?v=1500089887',
    price: 10,
    inventory: 200
  },
  {
    name: 'Tillandsias Air Plant',
    description: 'Tillandsias, also known as "air plants", are amazing plants that do not require soil to grow. Most tillandsias are found in semi-tropical regions of Central and South America, Mexico and the southern part of the United States. They absorb water and nutrients through their leaves and the roots are simply anchors. Tillandsias are ideal for adding color and variety to orb landscapes, potted plants and even floral arrangements. With proper care, they can last for years and some may even bloom.',
    imgUrl: 'https://cdn.shopify.com/s/files/1/0350/5665/products/Tillandsia-Ionantha-Fuego_web_grande.jpg?v=1500153520',
    price: 6,
    inventory: 100
  },
  {
    name: 'Pink Grafted Cactus',
    description: 'Quickly add a splash of cheerful color to your garden or indoor terrarium with this pink grafted cactus. Easy to grow and drought tolerant, they are a fun, first choice for almost any cactus enthusiast.',
    imgUrl: 'https://cdn.shopify.com/s/files/1/0350/5665/products/Graphite-2.5_-Pink_web_large.jpg?v=1490761943',
    price: 6,
    inventory: 100
  }

]

const categories = [
  {
    name: 'Succulents, Cacti, and Air Plants',
    imgUrl: 'https://cdn.shopify.com/s/files/1/0150/6262/products/Succulent_1.jpg?v=1492714852',
  },
  {
    name: 'Orchids',
    imgUrl: 'http://demandware.edgesuite.net/aakh_prd/on/demandware.static/-/Sites-main/default/dw52d3d30e/images/large_gray/44-4545.jpg',
  },
  {
    name: 'Gift Plants',
    imgUrl: 'http://s7d1.scene7.com/is/image/terrain/43659762_000_a?$zoom2$',
  },
  {
    name: 'Fruit Trees',
    imgUrl: 'https://www.brighterblooms.com/images/D.cache.dpthmbn/1334.jpg',
  },
  {
    name: 'Carnivorous Plants',
    imgUrl: 'https://cdn3.volusion.com/hwnyj.vxqwe/v/vspfiles/photos/14031-3.jpg?1375515958',
  },
  {
    name: 'Roses',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/736x/d9/3a/dc/d93adc5c2a223f77aa33967c5216075d--blush-roses-pink-roses.jpg',
  },
  {
    name: 'Floral Bouquets',
    imgUrl: 'http://s7d1.scene7.com/is/image/terrain/43659762_000_a?$zoom2$',
  },
  {
    name: 'Planters',
    imgUrl: 'http://s7d1.scene7.com/is/image/terrain/43596873_040_a?$zoom2$',
  }
]

const productCategories = [
  {
    productId: 1,
    categoryId: 1
  },
  {
    productId: 2,
    categoryId: 1
  },
  {
    productId: 3,
    categoryId: 2
  },
  {
    productId: 4,
    categoryId: 2
  },
  {
    productId: 5,
    categoryId: 2
  },
  {
    productId: 6,
    categoryId: 7
  },
  {
    productId: 7,
    categoryId: 7
  },
  {
    productId: 6,
    categoryId: 3
  },
   {
    productId: 7,
    categoryId: 3
  },
  {
    productId: 7,
    categoryId: 4
  },
  {
    productId: 8,
    categoryId: 7
  },{
    productId: 9,
    categoryId: 7
  },{
    productId: 10,
    categoryId: 7
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
  },
  {
    text: 'a wonderful surprise from my hubby',
    stars: 5,
    productId: 4,
    userId: 9
  },
  {
    text: 'too expensive! but worth it',
    stars: 4,
    productId: 10,
    userId: 5
  },
  {
    text: 'these brightened my entire living room!',
    stars: 5,
    productId: 6,
    userId: 6
  },
  {
    text: 'I am afraid of this plant.',
    stars: 3,
    productId: 29,
    userId: 7
  },
  {
    text: 'My plant bit me',
    stars: 2,
    productId: 30,
    userId: 8
  },
  {
    text: 'astounding!!! incredible!!!!',
    stars: 5,
    productId: 32,
    userId: 10
  },
  {
    text: 'pretty nice',
    stars: 4,
    productId: 7,
    userId: 9
  },
  {
    text: 'my ex bought these for me',
    stars: 1,
    productId: 2,
    userId: 3
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
  },
  {
    name: 'Pierre Croissant',
    email: 'pcroissant@croissant.com',
    password: 'pierrespw',
    salt: 'saltttt',
    googleId: '91011'
  },
  {
    name: 'Terri Toast',
    email: 'ttoast@toast.com',
    password: 'terrispw',
    salt: 'ilikesalt',
    googleId: '1213'
  },
  {
    name: 'Abner Crumpet',
    email: 'acrumpet@crumpet.com',
    password: 'abnerspw',
    salt: 'saltsalt',
    googleId: '1415'
  },
  {
    name: 'Minnie Muffin',
    email: 'mmuffin@muffin.com',
    password: 'minniespw',
    salt: 'salt123',
    googleId: '1617'
  },
  {
    name: 'Derek Doughnut',
    email: 'ddoughnut@doughnut.com',
    password: 'derekspw',
    salt: 'salt456',
    googleId: '1819'
  },
  {
    name: 'Betty Scone',
    email: 'bscone@scone.com',
    password: 'bettyspw',
    salt: 'salt789',
    googleId: '2021'
  },
  {
    name: 'Jake Cappuccino',
    email: 'jcappuccino@cappucino.com',
    password: 'jakespw',
    salt: 'saltisthebest',
    googleId: '2223'
  },
  {
    name: 'Earl Grey',
    email: 'egrey@tea.com',
    password: 'earlspw',
    salt: 'nosaltintea',
    googleId: '2425'
  },
  {
    name: 'Olivia Omelette',
    email: 'oomelette@omelette.com',
    password: 'oliviaspw',
    salt: 'saltisgood',
    googleId: '2627'
  }
];

const orders = [
  {
    status: 'Created',
    subtotal: 14.99,
    sessionId: '1wu9120noihd1'
  },
  {
    status: 'Created',
    subtotal: 123.00,
    sessionId: 'jqwojqwjoqw920'
  },
  {
    status: 'Processing',
    subtotal: 69.95,
    sessionId: '8r228hweue389e',

  },
  {
    status: 'Completed',
    subtotal: 12756.00,
    sessionId: 'djioedjwejiodkm'
  },
]

const orderProducts =[
  {
    orderId: 1,
    productId: 1,
    price: 12.00,
    quantity: 3
  },
  {
    orderId: 1,
    productId: 2,
    price: 56.00,
    quantity: 7
  },
  {
    orderId: 2,
    productId: 1,
    price: 1.00,
    quantity: 1000
  },
  {
    orderId: 3,
    productId: 3,
    price: 7.00,
    quantity: 76
  },
  {
    orderId: 3,
    productId: 1,
    price: 123455.00,
    quantity: 1
  }
]


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
  .then(() => Promise.all(orders.map(order => Order.create(order))))
  .then(() => Promise.all(orderProducts.map(orderProduct => OrderProduct.create(orderProduct))))
  .then(() => console.log('Finished seeding!'))
  .catch(err => console.error('There was a problem seeding.', err, err.stack));


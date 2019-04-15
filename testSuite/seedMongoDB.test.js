const mongooose = require('mongoose');
const seedMongo = require('../database/mongoDB/seedMongoDB.js');

mongooose.connect('mongodb://127.0.0.1:27017/photoCarousel');
const database = mongooose.connection;

test('Expect schema makes a new  object', () => {
  expect(typeof seedMongo.schema).toBe('object');
});
test('Expect moke Document ListingID to be id inputted', () => {
  expect(seedMongo.mokeDocument(100, 120).ListingID).toBe('Listing-100');
});
test('Expect moke Document photoID to be combination of Listing ID and photoIndex', () => {
  expect(seedMongo.mokeDocument(100, 120).photoID).toBe('100_120');
});

test('Expect moke Document photoDescription to make a string', () => {
  expect(typeof seedMongo.mokeDocument(100, 120).photoDescription).toBe('string');
});

test('Expect photoURL roomID to be less than 200 and more than 99', () => {
  expect(parseInt(seedMongo.mokeDocument(100, 120).photoURL.slice(56, 60))).toBeGreaterThanOrEqual(99);
  expect(parseInt(seedMongo.mokeDocument(100, 120).photoURL.slice(56, 60))).toBeLessThan(200);
});


test('Expect Database to make new Listing', (done) => {
  const ListingCollection = mongooose.model('listing899photo', seedMongo.schema);
  ListingCollection.collection.drop({}, () => {
    seedMongo.makeCollection(899, () => {
      done();
    });
  });
});

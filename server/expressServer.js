const express = require('express');
const bodyParser = require('body-parser');
const getDB = require('../database/mongoDB/getMongoDB.js');

const app = express();


const port = process.env.PORT || 3006;

app.use((req, res, next) => {
  console.log(`now serving ${req.method} request at ${req.url}`)
  next();
})

// app set at localhost:3006/rooms?id=XXX
app.use('/rooms/:id', express.static('public'));

// use of body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// get request based on room number
app.get('/api/rooms/:id/photos', (req, res) => {
  getDB.getDBcollection(req.params.id, (err, photoDocuments) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(200);
      res.end(JSON.stringify(photoDocuments));
    }
  });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
}


module.exports = app;

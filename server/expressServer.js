const express = require('express');
const bodyParser = require('body-parser');
const getDB = require('../database/mongoDB/getMongoDB.js');

const app = express();


const port = 3006;

// app set at localhost:3006/listing/
app.use('/listing', express.static('public'));

// use of body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// get request based on room number

app.get('/listing/:listingID', (req, res) => {
  getDB.getDBcollection(req.url.slice(9, 12), (err, photoDocuments) => {
    console.log('Go data');
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(200);
      res.end(JSON.stringify(photoDocuments));
    }
  });
});


app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const db = require('./db');

const publicDir = __dirname + '/../public/';

const PORT = 3000;

const buckets = require('./routes/buckets');
const getAllImagesFromDB = require('./routes/getAllImagesFromDB');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(publicDir));

app.use('/buckets', buckets);

app.use('/getAllImagesFromDB', getAllImagesFromDB);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

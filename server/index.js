const express = require('express');

const app = express();
const bodyParser = require('body-parser');

// const AWS = require('aws-sdk');
// // loads aws credentials
// AWS.config.loadFromPath(__dirname + '/aws-creds.json');
// const s3 = new AWS.S3();

const db = require('./db');

const publicDir = __dirname + '/../public/';

// /Users/maspen/Documents/learning/hack-reactor-INTENSIVE/Capstone/repos/image-viewer-matt/server
// console.log('__dirname', __dirname);
// /Users/maspen/Documents/learning/hack-reactor-INTENSIVE/Capstone/repos/image-viewer-matt/server/../public/
// console.log('publicDir', publicDir);

//  '/Users/maspen/Documents/learning/hack-reactor-INTENSIVE/Capstone/repos/image-viewer-matt/server/../public/img/sample-images.js'
// const dummyImageData = require(publicDir + 'img/sample-images.js');

const PORT = 3000;

const buckets = require('./routes/buckets');
const getAllImagesFromDB = require('./routes/getAllImagesFromDB');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(publicDir));

// image object created from S3 bucket response
// const urlObj = {};

// app.get('/images', (req, res) => {
// 	// will need to hook into db
// 	// headers.set("Content-Type", "image/jpg");
// 	console.log('dummyImageData', JSON.stringify(dummyImageData))

// 	res.status(200);
// 	res.send(dummyImageData);
// });
// app.get('/', (req, res) => {
//   // will go to 'default page where product item is '0'
// });

// this is how we extract 'orderId' from the URL
// app.get('/viewer/:orderId', function(request, response){
//   response.send('viewer ' + request.params.orderId);
// });
// app.get('/:productId', (req, res) => {
//   // will go to same product page but use 'productId' to display
//   // images for the product
// });

// [time-permitting] - page displaying all the buckets in S3
app.use('/buckets', buckets);

// [time permitting] - page displaying all the images
app.use('/getAllImagesFromDB', getAllImagesFromDB);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const AWS = require('aws-sdk');
// loads aws credentials
AWS.config.loadFromPath(__dirname + '/aws-creds.json');
const s3 = new AWS.S3();

const db = require('./db');

const publicDir = __dirname + '/../public/';

// /Users/maspen/Documents/learning/hack-reactor-INTENSIVE/Capstone/repos/image-viewer-matt/server
// console.log('__dirname', __dirname);
// /Users/maspen/Documents/learning/hack-reactor-INTENSIVE/Capstone/repos/image-viewer-matt/server/../public/
// console.log('publicDir', publicDir);

//  '/Users/maspen/Documents/learning/hack-reactor-INTENSIVE/Capstone/repos/image-viewer-matt/server/../public/img/sample-images.js'
// const dummyImageData = require(publicDir + 'img/sample-images.js');

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(publicDir));

// image object created from S3 bucket response
const urlObj = {};

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
app.get('/bucket', (req, res) => {
	// s3 setup: http://www.joshsgman.com/upload-to-and-get-images-from-amazon-s3-with-node-js/
	// getting bucket: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listObjects-property
	var params = {
		Bucket: "etsy-page-images"
		// MaxKeys: 2
	};

	s3.listObjects(params, function(err, data) {
   if (err) {
    // TODO: find strategy for error handling
   	console.log(err, err.stack);

   	res.status(400);
   	res.send('error getting bucket: ', err);
   }
   // console.log(data);

    parseBucketResponseInsertIntoMySQL(data.Contents);
    insertBucketImages();

   res.status(200);
   res.send(data.Contents);
 });
});

// [time permitting] - page displaying all the images
app.get('/getAllImagesFromDB', (req, res) => {
  getAllImagesFromDB((err, rows) => {
    if (err) {
      res.status(400);
      res.send('error getting images: ', err);
    }
    res.status(200);
    res.send(rows);
  });
});

// TODO: getImagesByProductId

let parseBucketResponseInsertIntoMySQL = (imgArray) => {
  const urlPrefix = 'https://s3.amazonaws.com/etsy-page-images/';
  imgArray.map(img => {
    return img.Key.split('/');
  }).forEach(arr => {
    if (arr[1] !== '') {
      urlObj[arr[0]] = urlObj[arr[0]] || [];
      urlObj[arr[0]].push(urlPrefix + arr[0] + '/' + [arr[1]]);
    }
  });
  // console.log(JSON.parse(JSON.stringify(urlObj)));
/* urlObj:
{ '0': 
   [ 'https://s3.amazonaws.com/etsy-page-images/0/0-beach-zoom.jpg',
     'https://s3.amazonaws.com/etsy-page-images/0/1-beach-zoom.jpg',
     'https://s3.amazonaws.com/etsy-page-images/0/2-beach-zoom.jpg',
     'https://s3.amazonaws.com/etsy-page-images/0/3-beach-zoom.jpg',
     'https://s3.amazonaws.com/etsy-page-images/0/4-beach-zoom.jpg' ],
  '1': 
   [ 'https://s3.amazonaws.com/etsy-page-images/1/0-bread-zoom.jpg',
     'https://s3.amazonaws.com/etsy-page-images/1/1-bread-zoom.jpg',
     'https://s3.amazonaws.com/etsy-page-images/1/2-bread-zoom.jpg',
     'https://s3.amazonaws.com/etsy-page-images/1/3-bread-zoom.jpg' ] }
*/
};

let insertBucketImages = () => {
    // INSERT INTO images (product_id, img_src) VALUES (0, 'https://s3.amazonaws.com/etsy-page-images/0/0-beach-zoom.jpg');
  const queryPrefix = 'INSERT INTO images (product_id, img_src) VALUES (';
    for (var key in urlObj) {
      urlObj[key].forEach(entry => {
        let insertQuery = `${queryPrefix}${key}, '${entry}');`;
        //console.log(insertQuery);// // INSERT INTO images (product_id, img_src) VALUES (1', 'https://s3.amazonaws.com/etsy-page-images/1/0-bread-zoom.jpg');

        db.query(insertQuery, null, (err, result) => {
          if (err) console.log(`error inserting ${entry}:`, err);
          console.log(`inserted ${entry}`);
        });
    });
  }
};

let getAllImagesFromDB = (callback) => {
  // TODO: find arg/s that will only return img
  /*
RowDataPacket {
    id: 10,
    product_id: 1,
    img_src: 'https://s3.amazonaws.com/etsy-page-images/1/2-bread-zoom.jpg' },
  */
  db.query(`SELECT * FROM images;`, null, callback);
};

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

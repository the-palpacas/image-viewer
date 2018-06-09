var express = require('express');
var router = express.Router();

const AWS = require('aws-sdk');
AWS.config.loadFromPath(__dirname + '/aws-creds.json');
const s3 = new AWS.S3();

const db = require('../db');

const urlObj = {};

router.get('/', function(req, res) {
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

/* in (from S3):
{ '0': 
   [ 'https://s3.amazonaws.com/etsy-page-images/0/0-beach-zoom.jpg',
     'https://s3.amazonaws.com/etsy-page-images/0/1-beach-zoom.jpg',
     'https://s3.amazonaws.com/etsy-page-images/0/2-beach-zoom.jpg',
     'https://s3.amazonaws.com/etsy-page-images/0/3-beach-zoom.jpg',
     'https://s3.amazonaws.com/etsy-page-images/0/4-beach-zoom.jpg' ],
  '1': 
...
*/
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

module.exports = router;
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
console.log('__dirname', __dirname);
// /Users/maspen/Documents/learning/hack-reactor-INTENSIVE/Capstone/repos/image-viewer-matt/server/../public/
console.log('publicDir', publicDir);

//  '/Users/maspen/Documents/learning/hack-reactor-INTENSIVE/Capstone/repos/image-viewer-matt/server/../public/img/sample-images.js'
const dummyImageData = require(publicDir + 'img/sample-images.js');

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(publicDir));

app.get('/images', (req, res) => {
	// will need to hook into db
	// headers.set("Content-Type", "image/jpg");
	console.log('dummyImageData', JSON.stringify(dummyImageData));

	res.status(200);
	res.send(dummyImageData);
});

app.get('/bucket', (req, res) => {
	// s3 setup: http://www.joshsgman.com/upload-to-and-get-images-from-amazon-s3-with-node-js/
	// getting bucket: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listObjects-property
	var params = {
		Bucket: "etsy-page-images"
		// MaxKeys: 2
	};

	s3.listObjects(params, function(err, data) {
   if (err) { 
   	console.log(err, err.stack);

   	res.status(400);
   	res.send('error getting bucket: ', err);
   }
   // console.log(data);

// printImgUrls(data.Contents);
  parseBucketResponseIntoSQL(data.Contents);

   res.status(200);
   res.send(data.Contents);
 });

/* data BF folders:
	{"IsTruncated":false,
		"Marker":"",
		"Contents":
			[
				{
					"Key":"img-1.jpg",
					"LastModified":"2018-06-01T13:59:19.000Z",
					"ETag":"\"4ffa6f72752b2f5e1f5caba7050a8e10\"",
					"Size":43573,
					"StorageClass":"STANDARD",
					"Owner":
						{
							"DisplayName":"mattaspen",
							"ID":"ed584b9327b5302c7edc3bcfbf791b677280b7c6215e9bf49b840353e761c7b1"
						}
				},
				{
					"Key":"img-2.jpg",
					"LastModified":"2018-06-01T13:59:20.000Z",
					"ETag":"\"e55c4e15bc934dbe3bc0d1107144b470\"",
					"Size":25539,"StorageClass":"STANDARD",
					"Owner":
						{
							"DisplayName":"mattaspen",
							"ID":"ed584b9327b5302c7edc3bcfbf791b677280b7c6215e9bf49b840353e761c7b1"
						}
					}
			],
			"Name":"etsy-page-images",
			"Prefix":"",
			"MaxKeys":2,
			"CommonPrefixes":[]
		}
*/
});

/*
['https://s3.amazonaws.com/etsy-page-images/0/',
  'https://s3.amazonaws.com/etsy-page-images/0/0-beach-zoom.jpg',
  'https://s3.amazonaws.com/etsy-page-images/0/1-beach-zoom.jpg',
  'https://s3.amazonaws.com/etsy-page-images/0/2-beach-zoom.jpg',
  'https://s3.amazonaws.com/etsy-page-images/0/3-beach-zoom.jpg',
  'https://s3.amazonaws.com/etsy-page-images/0/4-beach-zoom.jpg']
  --> have to remove any entries that don't end with 'jpg'
*/

let printImgUrls = (imgArray) => {
  let urlPrefix = 'https://s3.amazonaws.com/etsy-page-images/';
  let imgLinkArr = imgArray.filter((img) => {
  	// for now hack b/c 1st is the bucket name
  	// TODO: check that img[key] ends with 'jpg'
  	return img['Key'].endsWith('jpg');
      // return urlPrefix + img['Key'];
  }).map((img) => {
		return urlPrefix + img['Key'];
	});

/*
[ 'https://s3.amazonaws.com/etsy-page-images/0/0-beach-zoom.jpg',
  'https://s3.amazonaws.com/etsy-page-images/0/1-beach-zoom.jpg',
  'https://s3.amazonaws.com/etsy-page-images/0/2-beach-zoom.jpg',
  'https://s3.amazonaws.com/etsy-page-images/0/3-beach-zoom.jpg',
  'https://s3.amazonaws.com/etsy-page-images/0/4-beach-zoom.jpg' ]
*/
	console.log('imgLinkArr', imgLinkArr);
};

let parseBucketResponseIntoSQL = (imgArray) => {
  const urlObj = {};

  const urlPrefix = 'https://s3.amazonaws.com/etsy-page-images/';
  imgArray.map((img) => {
    return img.Key.split('/');
  }).forEach((arr) => {
    if (arr[1] !== '') {
      urlObj[arr[0]] = urlObj[arr[0]] || [];
      urlObj[arr[0]].push(urlPrefix + arr[0] + '/' + [arr[1]]);
    }
  });

  // console.log(JSON.stringify(urlObj));
  // INSERT INTO images (product_id, img_src) VALUES (0, 'https://s3.amazonaws.com/etsy-page-images/0/0-beach-zoom.jpg');
  const queryPrefix = 'INSERT INTO images (product_id, img_src) VALUES (';
  for (var key in urlObj) {
  	console.log(key);
  	// console.log(urlObj[key]);
  	urlObj[key].forEach((entry) => {
  		console.log(queryPrefix + key + `', '` + entry + `');`);
  	});
  }
};

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
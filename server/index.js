const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const dummyImageData = require(__dirname + '/../public/img/dummy-images.js');
// error: const sampleImg = require(__dirname + '/../public/img/sample-image.jpg');
// /Users/maspen/Documents/learning/hack-reactor-INTENSIVE/Capstone/repos/image-viewer-matt/public/img
// /Users/maspen/Documents/learning/hack-reactor-INTENSIVE/Capstone/repos/image-viewer-matt/server

const sampleImgPath = __dirname + '/../public/img/sample-image.jpg'
const imgFileName = 'img/sample-image.jpg';

const PORT = 3000;

const publicDir = __dirname + '/../public/';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// console.log('__dirname', __dirname);
// /Users/maspen/Documents/learning/hack-reactor-INTENSIVE/Capstone/repos/image-viewer-matt/server

app.use(express.static(__dirname + '/../public/'));

app.get('/images', function (req, res, next) {

	var options = {
    root: publicDir,
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

	res.sendFile(imgFileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', imgFileName);
    }
  });
});

// app.get('/images', function (req, res) {
// 	// will need to hook into db
// 	// headers.set("Content-Type", "image/jpg");
// 	console.log('dummyImageData', JSON.stringify(dummyImageData));

// 	res.status(200);

// 	//res.send(sampleImg);

// 	// res.contentType('jpeg');
// 	// res.end(sampleImg, 'binary');

// 	// res.contentType('image/jpeg');
// 	//res.send(sampleImg);
// 	res.sendFile(sampleImgPath);
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
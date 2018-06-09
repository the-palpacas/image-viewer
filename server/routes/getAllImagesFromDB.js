var express = require('express');
var router = express.Router();

const db = require('../db');

router.get('/', function(req, res) {
  getAllImagesFromDB((err, rows) => {
    if (err) {
      res.status(400);
      res.send('error getting images: ', err);
    }
    res.status(200);
    res.send(rows);
  });
});

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

module.exports = router;
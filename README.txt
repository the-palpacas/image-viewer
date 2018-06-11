****** NOTE:

server/routes/aws-creds.json will NOT be included & throw and error. you'll either have to disable the feature where this is required, reate a mysql db (see server/db/images.sql ... towards the bottom is a list of images used) & populate the image data accordingly.


installation:
npm install --save babel-cli babel-core \
  babel-preset-es2015 babel-preset-react \
  babel-loader express react react-dom webpack \
  body-parser bootstrap jquery mysql mongoose mysql underscore

npm install -D <package name>
- devDependencies

npm install -S <package name>
- dependencies

ALSO:
npm install --save http


mysql:
> mysql -u root -p
>> enter password

> use image_viewer
> show tables;
+------------------------+
| Tables_in_image_viewer |
+------------------------+
| images                 |
+------------------------+

mysql> select * from images;
+----+------------+--------------------------------------------------------------+
| id | product_id | img_src                                                      |
+----+------------+--------------------------------------------------------------+
| 84 |          0 | https://s3.amazonaws.com/etsy-page-images/0/0-beach-zoom.jpg |
| 85 |          0 | https://s3.amazonaws.com/etsy-page-images/0/1-beach-zoom.jpg |
| 86 |          0 | https://s3.amazonaws.com/etsy-page-images/0/2-beach-zoom.jpg |
| 87 |          0 | https://s3.amazonaws.com/etsy-page-images/0/3-beach-zoom.jpg |
| 88 |          0 | https://s3.amazonaws.com/etsy-page-images/0/4-beach-zoom.jpg |
| 89 |          1 | https://s3.amazonaws.com/etsy-page-images/1/0-bread-zoom.jpg |
| 90 |          1 | https://s3.amazonaws.com/etsy-page-images/1/1-bread-zoom.jpg |
| 91 |          1 | https://s3.amazonaws.com/etsy-page-images/1/2-bread-zoom.jpg |
| 92 |          1 | https://s3.amazonaws.com/etsy-page-images/1/3-bread-zoom.jpg |
+----+------------+--------------------------------------------------------------+


axios:

npm install axios

// GET request for remote image
axios({
  method:'get',
  url:'http://bit.ly/2mTM3nY',
  responseType:'stream'
})
  .then(function(response) {
  response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
});

// POST sending in data
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});

// GET
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

- linter -- https://www.npmjs.com/package/eslint
> eslint --init
? How would you like to configure ESLint? Use a popular style guide
? Which style guide do you want to follow? Airbnb
? Do you use React? Yes
? What format do you want your config file to be in? JSON
Checking peerDependencies of eslint-config-airbnb@latest

there will be a .eslintrc file

... none of this works, but this does:

./node_modules/.bin/eslint .
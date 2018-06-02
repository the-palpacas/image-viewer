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
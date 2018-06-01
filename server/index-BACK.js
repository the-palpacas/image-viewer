import Express from 'express';
import { Server } from 'http';

const app = new Express();
const server = new Server(app);

app.use(Express.static(path.join(__dirname, '../public')));


// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'dev';

server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
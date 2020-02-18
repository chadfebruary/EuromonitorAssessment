const http = require('http');
const router = require('./router.js');

const port = 3002;

const server = http.createServer((req, res) => {
  router.home(req, res);
  //router.user(req, res);
}).listen(port, () => {
  console.log(`Server running at http://:${port}/`);
});
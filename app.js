// https://github.com/gnanadeep/basic-node-server

const express = require('express');
const routes = require('./routes');
const app = express();

// // middleware placeholder
app.use((req, res, next) => {
  console.log('request recevied');
  next();
});

app.use('/', routes);

const controller = (req, res) => {
  res.send({
    url: req.url,
  });
};

// This way you chain the http methods to urls
app.route('/debug').get(controller);


app.listen(8080, () => {
  console.log('app started in 8080');
});

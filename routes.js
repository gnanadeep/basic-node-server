const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const api = require('./controller/api-fetch');
// here we can use router specific middleware
// other way to use app.route directly;

router.get('/test', (req, res) => {
  res.send({
    key: 'welcome',
  });
});

router.get('/api', api.nodeFetchTest);

router.get('/api2', api.nodeFetchTwoCall);

module.exports = router;

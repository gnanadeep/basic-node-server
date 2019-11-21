const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

// here use router specific middleware
// other way to use app.route directly;

router.get('/test', (req, res) => {
  res.send({
    key: 'welcome',
  });
});

module.exports = router;

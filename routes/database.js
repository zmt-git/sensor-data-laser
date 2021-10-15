const express = require('express');

const router = express.Router();

router.post('/connect', (req, res) => {
  res.send(req.params)
})

module.exports = router;

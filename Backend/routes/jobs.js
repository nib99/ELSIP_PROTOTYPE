const express = require('express');
const router = express.Router();
// placeholder route
router.get('/', async (req, res) => {
  res.json({ jobs: [] });
});
module.exports = router;

const express = require('express');
const router = express.Router();
router.post('/assist', async (req,res) => {
  const { query } = req.body;
  // simple keyword-based demo
  if(query && query.toLowerCase().includes('job')) {
    return res.json({ reply: 'Found 3 jobs near you.'});
  }
  res.json({ reply: 'Sorry, I did not understand. (Demo AI)' });
});
module.exports = router;

const express = require('express');
const router = express.Router();
router.post('/mint', (req,res) => {
  // mock mint logic for demo
  res.json({ success: true, tx: '0xMOCKTX' });
});
module.exports = router;

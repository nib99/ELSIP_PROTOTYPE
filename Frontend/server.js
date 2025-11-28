const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/health', (req,res)=>res.json({status:'ok'}));
app.listen(8080, ()=>console.log('Frontend served on 8080'));

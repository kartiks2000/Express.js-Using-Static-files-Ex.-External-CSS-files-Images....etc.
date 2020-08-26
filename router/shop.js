
const express = require('express');

const path = require('path');
 
const router = express.Router();

router.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/addproduct');
});

router.use('/addproduct',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","addproduct.html"));
});

module.exports = router;
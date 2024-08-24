const express = require("express");
const router = express.Router()
router.get('/test1',(req,res)=>{
    res.send("I am the server talking to you ")
})

router.use('/',(req,res)=>{
    res.send("hello World");
})

//Test post Function
router.post('/test',(req,res)=>{
    const {username,password} = req.body;
    console.log("recieved data", {username,password})

    res.json({
        message: 'Form data received successfully!',
        receivedData: { username, password },
      });
})
module.exports = router;
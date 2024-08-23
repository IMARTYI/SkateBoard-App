const express = require("express");
const router = express.Router()



router.get('/test1',(req,res)=>{

    res.send("I am the server talking to you ")
})
module.exports = router;
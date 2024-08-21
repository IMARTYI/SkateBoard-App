const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 3000;
const  app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/test1',(req,res)=>{

    res.send("I am the server talking to you ")
})

app.use('/',(req,res)=>{
    console.log("recived request")
    res.send("hello World");

})
//Test post Function
app.post('/test',(req,res)=>{
    const {username,password} = req.body;
    console.log("recieved data", {username,password})

    res.json({
        message: 'Form data received successfully!',
        receivedData: { username, password },
      });
})


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);  
})


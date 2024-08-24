const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;
const  app = express();
app.use(cors());
app.use(bodyParser.json());
const router = require('./routes/routes');




app.use('/',router)






app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);  
})


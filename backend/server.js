const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

port =3000;
const  app = express();
app.use(cors());



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
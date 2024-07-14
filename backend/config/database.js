const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect= ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=> console.log("db connected successfuly"))
    .catch((error)=>
        {
            console.log("Issue in DB Connection");
            console.error(error.message);
            process.exit(1);
        });
}
module.exports =  dbconnect;
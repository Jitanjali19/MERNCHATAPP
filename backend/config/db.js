const mongoose = require("mongoose");
require('dotenv').config();
const connectDB = async()=>{
    try{
       const conn = await mongoose.connect(process.env.MONGO_URI);
       console.log("mongoDB connected Successfully");

    }catch(e){
       console.log("mongoose connection error",e);
      //  console.log("MongoDB URI:", process.env.MONGO_URI);  for checking is it undefine 
    }
};


module.exports = connectDB;
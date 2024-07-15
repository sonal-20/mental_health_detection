import mongoose from "mongoose";

const dbconnect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true
        })
        console.log("Connect to database");
    } catch (error) {
        console.log("Failed to connect the databse");
    }
}

export default dbconnect;
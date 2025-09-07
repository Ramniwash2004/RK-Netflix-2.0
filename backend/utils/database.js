import mongoose from "mongoose";
import dotenv from "dotenv";
import env from "dotenv";

dotenv.config({
    path:""
})

const databaseConnection = () => {
    console.log(process.env.MONGODB_URI);
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("mongodb connected successfully");
    }).catch((error)=>{
        console.log(error.message);
    })
};
export default databaseConnection;
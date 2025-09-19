import mongoose from "mongoose"
import dotenv from "dotenv";


dotenv.config();
export const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`ERROR: ${error.message}`);
        process.exit(1); // 1 code means exist with failer and 0 means success
    }
}
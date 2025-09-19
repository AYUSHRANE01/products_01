import express from "express";
import dotenv from "dotenv";
import { connectDB }  from './config/db.js';
import Product from "./models/product.model.js";
import mongoose from "mongoose";
import productRoutes from './routes/product.route.js';


dotenv.config();
const app = express();
// This allow us to json data in the req.body.
app.use(express.json());

const port=process.env.PORT || 5001;


app.use('/api/products', productRoutes);



console.log(process.env.MONGO_URI)

app.listen(port, ()=>{
    connectDB();
    console.log(`Server Star at Port Number ${port}`);
})



import mongoose from "mongoose";

const productScheme = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    }
},
{
    timestamps : true  // This timestamp make sure it has createdAt and updatedAt
}
);


const Product = mongoose.model('Product',productScheme);

export default Product;
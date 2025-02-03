const mongoose=require('mongoose')

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        requied:true,
        min:4,
    },
    desc:{
        type:String,
        required:true,
        min:8,
    },
    price:{
        type:Number,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    review:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        requied:true,
    }
})

module.exports=mongoose.model("Product", ProductSchema)
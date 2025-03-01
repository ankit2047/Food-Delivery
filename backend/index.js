const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv').config()
const mongoose=require('mongoose')
const authController=require('./controllers/authController')
const productController=require('./controllers/productController')
const uploadController = require('./controllers/uploadController')
const app=express()

// Database connection 
// mongoose.connect("mongodb://127.0.0.1:27017/food-delivery")

try {
        const mongodb = process.env.Mongo_URL;

        if (!mongodb) {
          console.error('Database URI is not defined');
        }
        mongoose.connect(mongodb)
                .then(()=>console.log("Data base connected successfully~"))
          
} catch (error) {
        console.error('Connection failed', error);
}
//Routes and Middleware
//this two middleware make req.body accessible,otherwise is would be undefine!!!!
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/images', express.static('public/images'))
app.use('/auth',authController)
app.use('/product',productController)
app.use('/upload',uploadController)

// Start the server
const PORT=process.env.PORT||6000

app.listen(process.env.PORT,()=>console.log(`Server is running on port no. ${PORT}`))


//server is running on port 6000 and client is running on port 3000,
//we are going to get a cors ERROR!!!, but cors() remove that error
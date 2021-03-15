const express=require('express')
const mongoose=require('mongoose')
require('dotenv/config')


   


const app=express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

mongoose.connect(process.env.MONGOURI,{useNewUrlParser:true,useUnifiedTopology:true},()=>console.log('mongodb connected'))


app.use('/posts',require('./routes/posts'))

app.listen(5000,()=>console.log('server started on port 5000'))
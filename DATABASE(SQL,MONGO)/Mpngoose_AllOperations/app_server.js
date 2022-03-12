
import mongoose from 'mongoose';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/boysdb', {useNewUrlParser: true}); //, useUnifiedTopology: true

const boySchema= new mongoose.Schema({
    name:String,
    rollnum:Number,
    rating:String
})

const Boy= mongoose.model("Boy",boySchema);

const boy=new Boy({
    name:"raj",
    rollnum:1,
    rating:"goodboy"
})

boy.save();
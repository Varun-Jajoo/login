const e = require('express');
const mongoose =require('mongoose')
const notesSchema= new Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
        
    },
    tag :{
        type:String,
        
    },
    date:{
        type: Date,
        default:Date.now

    }
});
module.exports=mongoose.model('notes',notesSchema);

const mongoose = require('mongoose');

const Cour = mongoose.model('Cour', {

    id:{
        type:Number,
        //required:true,
        default:0
    },
    name:{
        type:String,
        required:true,
    },
   
    urlVideo:{
        type:String,
    },
    urlPDF:{
        type:String,
    },
    free:{
        type:Boolean,
        //required:true,
        default:true,
    },
    review:{
        type:Number,
        //required:true,
        default:0,
        min:0,
        max:5,
    }




})
module.exports = Cour;
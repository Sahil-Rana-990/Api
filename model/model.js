const mongoose=require("mongoose");

const UsersSchemas=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true,
        unique:true,
    },
    age:Number
})


const usersModel=new mongoose.model('imagesdatas',UsersSchemas)

module.exports=usersModel;
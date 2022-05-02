const mongoose=require("mongoose");


const quesSchema={
    
    name:String,
    gfgURL:String,
    isDone:Boolean,

};

const dsSchema={
    name:String,
    items:[quesSchema]
}

const userSchema={
    id:String,
    name:String,
    items:[dsSchema]
}

const Ques= mongoose.model(
    "Ques",quesSchema
);
 
const Ds = mongoose.model(
    "Ds" , dsSchema
);

const User =mongoose.model(
    "User" , userSchema
);
 
 
 const QuesString1=new Ques(
    {
        name:"Reverse String",
        gfgURL:"https://leetcode.com/problems/reverse-string/",
        isDone:false
    }
 );
const string = new Ds(
    {
        name:"string",
        items:[QuesString1,QuesString1,QuesString1,QuesString1]
    }
);
const Array = new Ds(
    {
        name:"array",
        items:[QuesString1,QuesString1,QuesString1,QuesString1]
    }
);
const Matrix = new Ds(
    {
        name:"matrix",
        items:[QuesString1,QuesString1,QuesString1,QuesString1]
    }
);

const DataStructure=[Array , string , Matrix];

module.exports = {User, Ds , Ques , DataStructure } ;
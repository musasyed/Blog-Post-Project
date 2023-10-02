const {Model,DataTypes}=require("sequelize");
const sequelize=require("../../bin/dbConnection");

class article extends Model{};

article.init(

{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER()
    },
    title:{
        type:DataTypes.STRING(),
        require:true,
    },
    description:{
        type:DataTypes.STRING(),
        require:true,
    }
    ,
    authorName:{
        type:DataTypes.STRING(),
        require:true,
    }
    

},


{
    sequelize,
    ModelName:'article',
    timestamps:true,
    peranoid:true
}


);

module.exports=article;
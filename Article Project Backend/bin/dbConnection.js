const dbConnection=require("../config.json");
const {Sequelize}=require("sequelize");

const database=new Sequelize(dbConnection.db);
database.authenticate().then(()=>{
    console.log("Database Connected")
}).catch((error)=>{
    console.log(error)
})

module.exports=database;
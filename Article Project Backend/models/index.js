const database=require("../bin/dbConnection");


// Import Tables
const article=require("./definitions/article")


const db={};

const models={
article
}

database.models=models;
db.sequelize=database;

module.exports={db,models};

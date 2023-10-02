const {models}=require("./index");

module.exports={

createPost:async(body)=>{
try{
return await models.article.create({...body});
}catch(error){
    console.log(error, "Error in Model")
}
},
getAllPosts:async()=>{
try{
return await models.article.findAll();
}catch(error){
    console.log(error,"error in getAllPost model")
}
},

// findById:async(id)=>{
//     try{
//        return await models.article.findByPk(id);
//     }catch(error){
//         console.log(error,"error in findById Model")
//     }
// },
findById:async(id)=>{
    try{
      return await models.article.findByPk(id)

    }catch(error){
      return error;
    }

  },

updatepost:async(body)=>{
    try{
         return  await models.article.update({
        ...body
    },{
        where:{
        id:body.id,
    }
    
    })
    }catch(error){
        console.log(error,"error in updatePost Model")
    }
},
deletePost:async(id)=>{
    try{
return await models.article.destroy(
    {
        where:{
            id:id,
        }
    }
)
    }catch(error){
        console.log(error,"error in deletePost Model")
    }
}
}
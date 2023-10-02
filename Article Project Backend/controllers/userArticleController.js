const userArticleService=require("../services/userArticleService");
const joi=require("joi");

const createPostSchema=joi.object({
title:joi.string().required(),
description:joi.string().required(),
authorName:joi.string().required()
});

const idSchema=joi.object({
    id:joi.number().required()
});

const updateSchema=joi.object({
    id:joi.number().required(),
    title:joi.string(),
description:joi.string(),
authorName:joi.string()
})

module.exports={
createPost:async(req,res)=>{
try{
console.log(req.body);
const validate=await createPostSchema.validateAsync(req.body);
if(validate.error){
    res.send(validate.error);
    console.log("error",validate.error);
    return;
}
const response=await userArticleService.createPost(validate);
res.send(response);
}catch(error){
    console.log(error,"error in controller")
}
},

getAllPosts:async(req,res)=>{
    try{
        const response= await userArticleService.getAllPosts();
        if(response){
           return res.send(response)
        }
        return res.send("Not Found Posts")
    }catch(error){
        console.log(error,"error in getAllPosts Controller")
    }
},
findById:async (req,res)=>{
    try {
        const validate=await idSchema.validateAsync(req.query);
        if(validate.error){
            return res.send(validate.error)
          }
          const response=await userArticleService.findById(validate.id)
          return res.send(response)
    } catch (error) {
        console.log(error,"error in findById Controller")
    }
},
updatePosts:async(req,res)=>{
    try{
        const validate=await updateSchema.validateAsync(req.body);
        if(validate.error){
            return res.send(validate.error)
        }
        const response=await userArticleService.updatePosts(validate)
         return res.send(response)
    }catch(error){
        console.log(error,"error in updatePost Controller")
    }
},
deletePost:async(req,res)=>{
    try{
        const validate=await idSchema.validateAsync(req.query);
  if(validate.error){
    return res.send(validate.error)
  }
  console.log(validate.error)
  const response=await userArticleService.deletePost(validate.id)
  console.log(response)
  if(response){
    return res.send(response);
  }
  console.log(response)
  }catch(error){
      return res.send(error)
     }
}

}

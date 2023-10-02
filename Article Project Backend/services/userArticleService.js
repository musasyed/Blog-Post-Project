const userArticleModel=require("../models/userArticleModel");


module.exports={

createPost:async(body)=>{
try{
const response=await userArticleModel.createPost(body);
if(response){
    return response;
}
return "No Post Created"
}catch(error){
    console.log(error,"error in services")
}
},

getAllPosts:async()=>{
    try{
        return await userArticleModel.getAllPosts();
    }catch(error){
        console.log(error,"error in getAllPost Service")
    }
},
// findById:async(id)=>{
//     try{
// const response=await userArticleModel.findById(id);
// if(response){
//     return response;
// }
// return "Not Found Any Post"
//     }catch(error){
//         console.log(first)
//     }
// },

findById:async(id)=>{
    try{
      const response= await userArticleModel.findById(id);
      if(response){
        return response;
    }
    console.log(response)
      return 'Not any Id Available'
    }catch(error){
      return error;
    }
  },

updatePosts:async(body)=>{
    try{
        const user=await userArticleModel.findById(body.id);
        if(user){
            const response=await userArticleModel.updatepost(body)
            if(response){
                return "Successfull Updated Post"
            }
            return "Unable to Update Post"
        }
        
    }
    catch(error){
        console.log(error, "error in updatePost Service")
    }
},
deletePost:async(id)=>{
    try{
        const user=await userArticleModel.findById(id);
        if(user){
            const response=await userArticleModel.deletePost(id);
            if(response){
                return "Successfull Delete Post"
            }
            return "Unable to delete";
        }
        return "Not Any Post Find";
    }catch(error){
        console.log(error,"error in deletePost Service")
    }
}
}
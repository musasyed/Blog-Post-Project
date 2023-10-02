const router=require("express").Router();
const userArticleController=require("../controllers/userArticleController");


router.post("/createPost",userArticleController.createPost);
router.get("/getAllPosts",userArticleController.getAllPosts);
router.get("/findById",userArticleController.findById)
router.put("/updateUser",userArticleController.updatePosts)
router.delete("/deletePost",userArticleController.deletePost)
module.exports=router;
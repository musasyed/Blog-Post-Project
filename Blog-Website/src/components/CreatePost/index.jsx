import React, { useState } from 'react'
import axios from "axios";

const CreatePost = () => {
const[title,setTitle]=useState();
const[description,setDescription]=useState();
const[authorName,setAuthorName]=useState();


const defaultValue={
    title,
    description,
    authorName
}

const createBlog=async()=>{
const response=await axios.post("http://localhost:3002/createPost",defaultValue)
console.log(response.data);
if(response.data.errors){
    alert(response.data.errors[0].message)
    // console.log(response.data.errors[0].message)
  }
  else if(response.data){
alert('Post Created')
}
else{
  return  error;
  }
// alert(response)
}


  return (
    <div className="container">
    <div>
        <h1 className='text-center mt-5'>Create Blog Post</h1>
        <div className="col-md-12 mt-4" >
    </div>
    <div className="col-md-12 mt-4" >
    <input  
        type="text"
        name="name"
        placeholder='Write Title'
        className='py-4 px-4'
        onChange={(e)=>setTitle(e.target.value)}
       
    />
    </div>
    <div className="col-md-12 mt-4">
        <input  
        type="text-area"
        name="name"
        placeholder='Write Description'
        className="w-50 h-150  p-3 py-4 px-4"
       onChange={(e)=>setDescription(e.target.value)}
    />
    </div>
    <div className="col-md-12 mt-4">
        <input  
        type="text"
        name="name"
        placeholder='Author Name'
        className='py-4 px-4'
        onChange={(e)=>setAuthorName(e.target.value)}
    />
    </div>
    <button  onClick={createBlog} className='btn btn-primary mt-3'>Create Blog</button>

        
    </div>
    </div>
    
  )
}

export default CreatePost;
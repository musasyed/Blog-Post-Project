import React, { useState } from 'react'
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
import UpdatePage from '../UpdatePage';
const PostLayout = (props) => {

const navigate=useNavigate("");
const[text,setText]=useState("");
const [data, setData] = useState(props.posts);

const updatePost=()=>{
navigate("/updatepost")
}

const deletePost=async()=>{
const response=await axios.delete(`http://localhost:3002/deletePost?id=${text}`);
console.log(response)
if(response.data=="Successfull Delete Post"){
  alert("Post Deleted")
  window.location.reload();
}
else{
  alert("Already Deleted") ;
}
}

  return (
    <div className='mainContainer'>
        <div className='mt-5 innerContainer'>
        <h1>
            Title:  {props.title}
        </h1>
        <h4>
           Description: {props.description}
        </h4>
        <h6>Author Name: {props.AuthorName}</h6>
        <p>ID:{props.id}</p>
        <div className='buttons'>
        <button onClick={updatePost} className='btn btn-primary'>Edit</button>
        </div>
        <div className='mt-4  text-center'>
          <button className='btn btn-primary' onClick={deletePost}> Delete Post</button>
          <input className='border border-primary' type="text" onChange={(e)=>setText(e.target.value)} />
          </div>
        </div>
    </div>
  )
}

export default PostLayout
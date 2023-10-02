import React, { useEffect, useState } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostLayout from '../../components/PostLayout';
import UpdatePage from '../../components/UpdatePage';
import "./style.css"
import { useNavigate } from 'react-router-dom';

// export const postsData=createContext();

const Home = () => {
const [data,setData]=useState([])
const navigate=useNavigate();

const goCreate=()=>{
navigate("/createpost");
}


const fetchAPI=async()=>{
const response= await axios.get("http://localhost:3002/getAllPosts");
console.log(response.data)
setData(response.data)
console.log(data, "data")
}

useEffect(()=>{
    fetchAPI();
},[])


  return (

      <div>
        <h1 className='text-center mt-2'>Musa Blog's Project</h1>
        

  <div className='button-Home'>
  <button  onClick={goCreate}   className='button btn btn-secondary'>Add Post</button>
  </div>
 
 {
    data.map((posts)=>{
        return(
            <div>
            <PostLayout
              title={posts.title}
              description={posts.description}
              AuthorName={posts.authorName}
              id={posts.id}
              posts={posts}
            />
            
            </div>
        )
    })
}


    </div>
  )
}

export default Home
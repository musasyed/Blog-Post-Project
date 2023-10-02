import React, { useState } from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik"
import axios from "axios"
import "./style.css"


const UpdatePage = () => {
const [text,setText]=useState();
const [data,setData]=useState([]);  
const[title,setTitle]=useState();
const[description,setDescription]=useState();
const[authorName,setAuthorName]=useState(); 
const [id,setID]=useState();

console.log(text)

// Getting Value From Field
const setValue=(e)=>{
setText(e.target.value)
}


// Get ID Data Function
const getData=async()=>{
    setID(text)
const response=await axios.get(`http://localhost:3002/findById/?id=${text}`)
console.log(response)
setData(response.data)
setTitle(response.data.title)
setDescription(response.data.description)
setAuthorName(response.data.authorName)
setID(response.data.id)
}
console.log(data,"data come from ID")

// -------------------------------------
const defaultValue={
    id,
    title,
    description,
    authorName
}

const updatePost=async()=>{
const response=await axios.put("http://localhost:3002/updateUser",defaultValue)
console.log(response,"updatePost")
if(response.data){
    alert(response.data)
}
else{
    alert("error")
}
}
// console.log(updatePost)

  return (
    <div className="container">
 

<div className="col-md-12 mt-4" >
    <input  
        type="text"
        name="name"
        placeholder='ID'
        onChange={setValue}
    
    />
    <button  onClick={getData} className='btn btn-primary'>Get ID Data</button>
    </div>
    <div className="col-md-12 mt-4" >
        <input type="text" defaultValue={data.id} disabled />
        <div className='mt-4'>
    <input  
        type="text"
        name="name"
        placeholder='Change Title'
        defaultValue={data.title}
        onChange={(e)=>setTitle(e.target.value)}
        className='p-3'
    />
    </div>
    </div>
    <div className="col-md-12 mt-4">
        <input  
        type="text-area"
        name="name"
        placeholder='Change Description'
        defaultValue={data.description}
        className="w-100 p-3"
        onChange={(e)=>setDescription(e.target.value)}
    />
    </div>
    <div className="col-md-12 mt-4 ">
        <input  
        type="text"
        name="name"
        placeholder='Change Author Name'
        defaultValue={data.authorName}
        onChange={(e)=>setAuthorName(e.target.value)}
        className='p-3'
    />
    <button  onClick={updatePost} className='btn btn-primary'>Update Data</button>
    </div>

        
    </div>
  )
}

export default UpdatePage;
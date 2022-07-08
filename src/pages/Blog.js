import React, { useEffect, useState } from 'react'
import {useParams,Link} from "react-router-dom";
import axios from "axios";
import Badge from "../components/Badge";
import "./Blog.css"
import { toast } from 'react-toastify';
// import {
//   MDBIcon
// } from "mdb-react-ui-kit";
const Blog = () => {

  const [blog,setBlog]=useState();
  const {id}=useParams();

  useEffect(()=>{
    if(id){
      getSingleBlog();
    }
  },[id])
  const getSingleBlog= async ()=>{
    const response= await axios.get(`http://localhost:5000/blogs/${id}`)
    if(response.status===200){
      console.log(response.data);
      setBlog(response.data);
    }else{
      toast.error("something went wrong");
    }
    setBlog(response.data);
  };

  //  const 
  return (
  <div className='main-container'>
    <div>
    <Link to="/">
      <strong style={{float:"left",color:"black"}} className="mt-3">
        Go Back
      </strong>
    </Link>
    </div>
    <h4>{blog && blog.title}</h4>

      <img src={blog && blog.imageUrl}
        style={{width:"100%",maxHeight:"600px"}}
      />
     <div className='desc'>
      {blog && blog.description}
     </div>
     

   
  </div>
  )
}

export default Blog;
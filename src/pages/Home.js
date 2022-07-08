import React,{useState,useEffect} from 'react'
import axios from "axios";
import { toast } from 'react-toastify';
import {MDBRow,MDBCol,MDBContainer,MDBTypography} from "mdb-react-ui-kit";
import Blogs from '../components/Blogs';
import Search from '../components/Search';
import Category from '../components/Category';
import LatestBlog from '../components/LatestBlog';
import "./Home.css";

const Home = () => {

 const [data,setData]=useState([]);
 const[latestBlog,setLatestBlog]=useState([]);
 const[searchValue,setSearchValue]=useState("");
 const options=["Travel","Fashion","Fitness","Sports","Food","Tech"]

 useEffect(()=>{
  loadBlogData(0, 5, 0);
  fetchLatestBlog();
 },[])

 const loadBlogData = async (start, end, increase)=>{
  const response= await axios.get(`http://localhost:5000/blogs?`)
  if(response.status===200){
    setData(response.data)
  }else{
    toast.error("something went wrong");
  }
 }
 console.log("data",data);


const handleDelete = async (id)=>{
  if(window.confirm("Are you sure to delete")){
  const response= await axios.delete(`http://localhost:5000/blogs/${id}`);
  if(response.status===200){
    toast.success("Deleted Successfully");
    loadBlogData();
  }else{
    toast.error("something went wrong");
  }
}}

const excerpt=(str)=>{
  if(str.length>50){
    str=str.substring(0,50)+"...";
  }
  return str;
}
const fetchLatestBlog= async()=>{
  const totalBlog= await axios.get("http://localhost:5000/blogs")
  const start=totalBlog.data.length-4;
  const end=totalBlog.data.length;
  const response =await axios.get(`http://localhost:5000/blogs?_start=${start}&_end=${end}`);
  if(response.status===200){
    setLatestBlog(response.data)
  }else{
    toast.error("something went wrong");
  }
}

const onInputChange=(val)=>{
  // if(!val){
  //   loadBlogData();
  // }
  setSearchValue(val);
} 

const handleSearch= async (e)=>{
  e.preventDefault();
  const response=await axios.get(
    `http://localhost:5000/blogs?q=${searchValue}`);
  if(response.status===200){
    console.log(response.data);
    setData(response.data);
  }else{
     toast.error("something went wrong");
  }
}
const handleCategory= async (category)=>{
    const response= await axios.get(`http://localhost:5000/blogs?category=${category}`)
    if(response.status===200){
      setData(response.data);
    }else{
      toast.error("something went wrong");
    }
  }

  return (
    <>
    <Search
     searchValue={searchValue}
     onInputChange={onInputChange}
     handleSearch={handleSearch}
     />

    <div className='categ'>
      <Category  options={options} handleCategory={handleCategory}/>
    </div>

    <div className='main-cont'>
     <div className='content'>
        {
        data.length===0 && (
          <MDBTypography className='text-center mb-0' tag="h2">
            No Blog Found
          </MDBTypography>
        )
        }
    
          {/* <div className='content-main'> */}
            {data && data.map((item,index)=>(
              <Blogs
               key={index}
               {...item}
               excerpt={excerpt}
               handleDelete={handleDelete}
              />
            ))}
         
        
     </div>

    <div className='latest-post'>
      <h4 className='text-area'>Recent Post</h4>
      {
        latestBlog && latestBlog.map((item,index)=>(
          <LatestBlog key={index}{...item}/>
        ))
      }
    </div>
    
    </div>
    <div style={{marginTop:"50px"}}>
      <MDBContainer>
        <MDBTypography note noteColor='primary'>
          It is blogging website where you will find blogs related to
          different categories like Travel,Food,Sports,Tech and Fashion.

        </MDBTypography>
      </MDBContainer>
    </div>
    </>
  )
}

export default Home
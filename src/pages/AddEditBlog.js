import React, {useState } from 'react'
import { MDBValidation,MDBInput,MDBBtn } from 'mdb-react-ui-kit'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const initialState={
  title:"",
  descriptoion:"",
  category:"",
  imageUrl:""
}

const options=["Travel","Fashion","Fitness","Sports","Food","Tech"]

const AddEditBlog = () => {
  const[formValue,setFormValue]=useState(initialState);
  const {title,description,category,imageUrl}=formValue;
  const navigate=useNavigate();

  const getDate=()=>{
    let today=new Date();
    let dd=String(today.getDate()).padStart(2,"0");
    let mm=String(today.getMonth()+1).padStart(2,"0");
    let yyyy=today.getFullYear();
    today= mm + "/" + dd + "/"+ yyyy;
    return today;
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();
    if(title && description && imageUrl && category){
      const currentDate=getDate();
      const updateBlogData={...formValue,date:currentDate};
      const response = await axios.post(
        "http://localhost:5000/blogs",updateBlogData);
      if(response.status===201){
        toast.success("blog is created sucessfully");
      }else{
        toast.error("something went wrong");
      }
      setFormValue({title:"",description:"",category:"",imageUrl:""});
      navigate("/");
    }
  }


  const onInputChange=((e)=>{
    let {name,value}=e.target;
    setFormValue({...formValue,[name]:value});
  })


  const onUploadImage=(file)=>{
    console.log("file:",file);
    // formdata will make a api to upload image on cloudsnary
    const formData=new FormData();
    formData.append("file",file);
    formData.append("upload_preset","xcnew1va");
    axios.post("http://api.cloudinary.com/v1_1/dzuegdtan/image/upload",formData)
    .then((res)=>{
      // console.log("Response",res);
      toast.info("Image uploaded successfully");
      setFormValue({...formValue,imageUrl:res.data.url})
    }).catch(()=>{
      toast.error("something went wrong");
    })

  };

  const onCategoryChange=((e)=>{
      setFormValue({...formValue,category:e.target.value});
  });
  
  return (
   <MDBValidation className='row g-3' style={{margin:"100px"}} noValidate onSubmit={handleSubmit}>
      <p className='fs-2 fw-bold'>Add Blog</p>
      <div style={
        {
          margin:"auto",
          padding:"0px",
          maxWidth:"400px",
          alignContent:"center"
        }
      }>
        <MDBInput value={title || ""} name="title" type="text"
         onChange={onInputChange} required label="Title"
         validation="Please provide a title"  invalid/>
         <br/>

         <MDBInput className='message'
          value={description || ""} 
          name="description"
          type="text"
          onChange={onInputChange}
          required 
          label="Description"
          validation="Please provide a description"
          textarea
          row={4}  
          invalid
           />
         <br/>

         <MDBInput type="file"
         onChange={(e)=>onUploadImage(e.target.files[0])} required 
         validation="Please provide a title" invalid />

         <br/>
         <select className='categoryDropdown' onChange={onCategoryChange} value={category} >
          <option>Please select Category</option>
          {options.map((option,index) => (
            <option value={option || ""} key={index}>
              {option}
            </option>
          ))}
         </select>
         <br/>
         <br/>
         <MDBBtn type="submit" style={{marginRight:"10px"}}>Add</MDBBtn>
         <MDBBtn color="danger" style={{marginRight:"10px"}} onClick={()=>navigate("/")} >GO back</MDBBtn>
         
      </div>

   </MDBValidation>
  )
}

export default AddEditBlog
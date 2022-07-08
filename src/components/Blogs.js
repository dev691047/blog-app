import React from 'react'
import {
    MDBCol,
    MDBCard,
    MDBCardTitle,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBBtn,
    MDBIcon,
    MDBContainer
} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import Badge from './Badge';

const Blogs = ({title,category,description,id,imageUrl,excerpt,handleDelete}) => {
  return (


   <div className='blogs-main'>
     <div className='h-100 mt-2' style={{maxWidth:"20rem"}}>
        <MDBCardImage 
        src={imageUrl}
        alt={title}
        position="top"
        style={{maxWidth:"100%",height:"180px"}}
        />
        <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText>
                {excerpt(description)}
                <Link to={`/blog/${id}`}>Read More</Link>
            </MDBCardText>
            <Badge>{category}</Badge>
            <span>
                <div className='mt-1' tag="a" color='none' onClick={()=>handleDelete(id)}>
                 <MDBIcon
                 fas
                 icon="trash"
                 style={{color:"red"}}
                 />
                </div>
            </span>
        </MDBCardBody>
     </div>
   </div>

  )
}

export default Blogs
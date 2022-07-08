import React from 'react';
import {Link} from "react-router-dom";
import {MDBCard,MDBRow,MDBCol,MDBCardImage,MDBCardBody} from "mdb-react-ui-kit";
const LatestBlog = ({imageUrl,title,id}) => {
  return (
    <div>
        <Link to={`/blog/${id}`}>
            {/* <MDBCard style={{maxWidth:"300px",height:"80px"}} className='mt-2'>
              <MDBRow className='g-0'>
                <MDBCol md="3">
                   <MDBCardImage
                     src={imageUrl}
                     alt={title}
                     fluid
                     className='rounded-circle'
                     style={{height:"70px"}}
                     />
                </MDBCol>
                <MDBCol md="9">
                    <MDBCardBody>
                        <p className='text-start latest-title'>
                            {title}
                        </p>
                    </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard> */}
         <div className='latest-main'>
          <img 
           src={imageUrl}
           alt={title}
           fluid
           className='rounded-circle'
           />
           <div className='latest-title'>
            {title}
           </div>
         </div>

        </Link>
    </div>
   
  )
}

export default LatestBlog
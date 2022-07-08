import React from 'react'
import {MDBContainer,MDBTypography} from "mdb-react-ui-kit";
const About = () => {
  return (
    <div style={{marginTop:"50px"}}>
      <MDBContainer>
        <MDBTypography note noteColor='primary'>
          It is blogging website where you will find blogs related to
          different categories like Travel,Food,Sports,Tech and Fashion.

        </MDBTypography>
      </MDBContainer>
    </div>
  )
}

export default About
import React, { useEffect , useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

const Search = ({handleSearch,onInputChange}) => {

   const [searchVal,setSearchVal] = useState("");


   useEffect(() =>{onInputChange(searchVal)},[searchVal,onInputChange])

  return (
    <div className='searchForm'>
        <form className='d-flex' onSubmit={handleSearch}>
            <input
              type="text"
              className='form-control'
              placeholder='Search Blog...'
              value={searchVal || ""}
              onChange={(e) => setSearchVal(e.target.value)}
              />
              <MDBBtn style={{marginLeft:"5px"}} type="submit">Search</MDBBtn>
        </form>
    </div>
  )
}

export default Search;
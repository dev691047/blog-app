// import { getMouseEventOptions } from '@testing-library/user-event/dist/utils'
import React from 'react'

const Category = ({handleCategory,options}) => {
  return (
    <div className='main-categ' >
        <h4>Categories</h4>
        <div >
            {options.map((item,index)=>(
                <button  className='cate-btn' key={index} onClick={()=>handleCategory(item)}>
                    {item}
                </button>
                
            ))}
        </div>
    </div>
  )
}

export default Category
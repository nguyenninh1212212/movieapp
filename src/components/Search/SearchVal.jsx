import React,{useState} from 'react'
const SearchVal = ({handleValue,val,handleClick}) => {
  return (
    <div>
    <input type="text" placeholder='nhap tu khoa' className='sear'  
         value={val}
         onChange={handleValue}
    />
    </div>
  )
}

export default SearchVal
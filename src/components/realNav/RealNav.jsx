import React,{useState} from 'react'
import { IoIosLogOut ,IoMdSearch,IoMdMenu } from "react-icons/io";
import { MdCancel ,MdOutlineHistory,   MdOutlineFavoriteBorder} from "react-icons/md";
import img from "./nlogo.png"
import "./Nav.css"
import useBoolean from '../hook/useBoolean';
import { Link,useNavigate } from 'react-router-dom';
import SearchVal from '../Search/SearchVal';
import Moviefound from '../Search/Moviefound';
const RealNav = () => {

   const [value, { setTrue, setFalse, toggle}] = useBoolean(false)
   const navigate = useNavigate();
   const menu=()=>{
    return(<div className="menu">
          <Link to={"/Action"}><p>Action</p></Link>
          <Link to={"/Horror"}> <p>Horror</p></Link>
          <Link to={"/Technology"}><p>Technology</p></Link>
          <Link to={"/War"}><p>War</p></Link>
          </div>)
   }
   const [val,setVal]=useState('') 
    const handleValue=(e)=>{
        setVal(e.target.value)
    }   
    const handleClick=()=>{
      if(val.trim() === ''){
       alert("Nhập lại!")}
      else{
        let Findmovie=val
      navigate(`/Moviefound/${Findmovie}`)}
      }
    
  
  return (
    <div>
      <div className="Nav">
        <div className="logo">
            <Link to={"/"}  style={{backgroundColor:"black"}} ><img src={img} alt="" style={{width:"100px",height:"100px",backgroundColor:"black"}} /></Link>
        </div>
        <div className="search">
           
             <SearchVal value={val} handleValue={handleValue} className='sear'/>
             <IoMdSearch className='sear' onClick={handleClick}  style={{color:"white"}}/>
        </div>
        <div className="icon">
           <p onClick={toggle}>{!value?<IoMdMenu className='sear' />: < MdCancel style={{color:"red"}}/>}</p>
          <p ><MdOutlineFavoriteBorder/></p>
           <p><MdOutlineHistory/></p>
           <p><Link to={"/Login"}><IoIosLogOut style={{color:"white",backgroundColor:"black"}}/></Link></p>
        </div>
      </div>
      <div >
          {value && menu()}
      </div>
    </div>
  )
}

export default RealNav
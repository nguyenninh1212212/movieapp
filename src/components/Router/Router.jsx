import React from 'react'
import { NavLink } from 'react-router-dom'
const Router = () => {
  return (
    <div>
     <NavLink to="/Login" exact activeClassName="active"> </NavLink>
       
    </div>
  )
}

export default Router
import React from 'react'
import './Nav.css'
import { FaRegUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
<FaRegUserCircle style={{fontSize:'50px'}} />
<h1>ToDo</h1>
<Link to="/"><MdLogout style={{fontSize:'50px'}}/></Link>

      
    </nav>
  )
}

export default Nav

import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../Assets/assets'

const Navbar = () => {
const [menu,setMenu] = useState("")

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={assets.Compassion_Logo} alt="" className='nav-logo' />
      </div>
      
      <ul className='nav-menu-options'>
        <li onClick={()=> {setMenu("home")}} >Home {menu==="home"?<hr />:<></>}</li> 
        <li onClick={()=> {setMenu("enquiries")}} >Enquiries {menu==="enquiries"?<hr />:<></>}</li> 
        <li onClick={()=> {setMenu("consultations")}} >Consultation {menu==="consultations"?<hr />:<></>}</li>
        <li onClick={()=> {setMenu("about us")}} >About Us {menu==="about us"?<hr />:<></>}</li>
      </ul>
      
      
    </div>
  )
}

export default Navbar
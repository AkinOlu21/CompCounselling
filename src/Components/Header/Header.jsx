import React from 'react'
import { assets } from '../../Assets/assets'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='h-left'>
          <h1>Welcome to compassion counselling</h1>
          <p>Caring for your needs</p>

          <div className='h-left-btn'>
           <button>Book with us today</button>          

          </div>
        </div>

        <div className='h-right'>
          <img src={assets.Header_img} alt="" />
        </div>
      
    </div>
  )
}

export default Header
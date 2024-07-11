import React from 'react'
import './Home.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Consultation from '../Consultation/Consultation'
import Enquiries from '../../Enquiries/Enquiries'

const Home = () => {
  return (
    <div>
        <Header/>
        <Enquiries/>
    </div>
  )
}

export default Home
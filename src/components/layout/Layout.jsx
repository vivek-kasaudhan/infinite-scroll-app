import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <main style={{height:"auto", marginTop:'50px', marginBottom:'80px'}}>{children}</main>
      <Footer/>
    
    </div>
  )
}

export default Layout
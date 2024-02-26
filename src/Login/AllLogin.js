import React from 'react'
import Topbar from '../Topbar'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Top from '../Top'
import HeaderLogin from './HeaderLogin'
import Acount from './Acount'

function AllLogin() {
  return (
    <div>

        <Topbar/>
        <Navbar/>
        <HeaderLogin/>
        <Acount/>
        <Footer/>
        <Top/>
    </div>
  )
}

export default AllLogin
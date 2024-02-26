import React from 'react'
import Topbar from '../Topbar'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Top from '../Top'
import HeaderContact from './HeaderContact'
import Contact from './Contact'

function AllContact() {
  return (
    <div>
    <Topbar/>
    <Navbar/>
    <HeaderContact/>
    <Contact/>
    <Footer/>
    <Top/>
    </div>
  )
}

export default AllContact
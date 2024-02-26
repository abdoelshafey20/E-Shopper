import React from 'react'
import Topbar from '../Topbar'
import Features from './Features'
import Categories from './Categories'
import Offer from './Offer'
import Subscribe from './Subscribe'
import Trendy from './Trendy'
import Vendor from './Vendor'
import Footer from '../Footer'
import Top from '../Top'
import NavbarHome from './NavbarHome'
import NewProducts from './NewProducts'




function AllHome() {
  return (
    <div>
        <Topbar/>
        <NavbarHome/> 
        <Features/>
        <Categories/>
        <Offer/>
        <NewProducts/>
        <Subscribe/>
        <Trendy/>
        <Vendor/>
        <Footer/>
        <Top/>
       
    </div>
  )
}

export default AllHome
import React from 'react'

import Topbar from '../Topbar'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Top from '../Top'
import HeaderCart from './HeaderCart'
import Cart from './Cart'
import { CartProvider  } from 'react-use-cart'


function AllCart() {
  return (
    <CartProvider>
        <Topbar/>
        <Navbar/>
        <HeaderCart/>
        <Cart/>
        <Footer/>
        <Top/>
    </CartProvider>
  )
}

export default AllCart
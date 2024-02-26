import React from 'react'
import Topbar from '../Topbar'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Top from '../Top'
import HeaderCheckout from './HeaderCheckout'
import Order from './Order'

function AllCheckout() {
    return (
        <div>
            <Topbar />
            <Navbar />
            <HeaderCheckout />
            <Order />
            <Footer />
            <Top />

        </div>
    )
}

export default AllCheckout
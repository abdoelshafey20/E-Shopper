import React from 'react'
import Topbar from '../Topbar'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Top from '../Top'
import HeaderDetails from './HeaderDetails'
import ShopDetails from './ShopDetails'
import ProductsDetails from './ProductsDetails'

function AllDetails() {
    return (
        <div>
            <Topbar />
            <Navbar />
            <HeaderDetails />
            <ShopDetails />
            <ProductsDetails />
            <Footer />
            <Top />
        </div>
    )
}

export default AllDetails
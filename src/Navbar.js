import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row border-top px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: "65px", margintop: "-1px", padding: "0 30px" }}>
                            <h6 className="m-0">Categories</h6>
                            <i className="fa fa-angle-down text-dark"></i>
                        </a>
                        <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style={{ width: "calc(100% - 30px)", zindex: "1" }}>
                            <div className="navbar-nav w-100 overflow-hidden" style={{ height: "410px" }}>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></a>
                                    <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                        <a to="" className="dropdown-item">Men's Dresses</a>
                                        <a to="" className="dropdown-item">Women's Dresses</a>
                                        <a to="" className="dropdown-item">Baby's Dresses</a>
                                    </div>
                                </div>
                                <a to="" className="nav-item nav-link">Shirts</a>
                                <a to="" className="nav-item nav-link">Jeans</a>
                                <a to="" className="nav-item nav-link">Swimwear</a>
                                <a to="" className="nav-item nav-link">Sleepwear</a>
                                <a to="" className="nav-item nav-link">Sportswear</a>
                                <a to="" className="nav-item nav-link">Jumpsuits</a>
                                <a to="" className="nav-item nav-link">Blazers</a>
                                <a to="" className="nav-item nav-link">Jackets</a>
                                <a to="" className="nav-item nav-link">Shoes</a>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <Link to="/" className="text-decoration-none d-block d-lg-none">
                                <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                            </Link>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <Link to="/" className="nav-item nav-link">Home</Link>
                                    <Link to="/shop" className="nav-item nav-link avtive">Shop</Link>
                                    <Link to="/details" className="nav-item nav-link ">Shop Detail</Link>
                                    <div className="nav-item dropdown">
                                        <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <Link to="/shoppingcart" className="dropdown-item">Shopping Cart</Link>
                                            <Link to="/checkout" className="dropdown-item">Checkout</Link>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                                </div>
                                <div className="navbar-nav ml-auto py-0">
                                    <Link to="/login" className="nav-item nav-link">Login</Link>
                                    <Link to="/products" className="nav-item nav-link">Products</Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
import axios from 'axios'
import React, { Component } from 'react'
import Topbar from '../Topbar'
import Navbar from '../Navbar'
import Top from '../Top'
import Footer from '../Footer'
import HeaderShop from './HeaderShop'


export class AllShop extends Component {
  state = {
    persons: []
  }

  componentDidMount() {

    axios.get("/js/Api.json")
      .then((item) => {
        this.setState(
          {
            persons: item.data
          }
        )
      })
  }
  render() {
    return (
      <div>
        <Topbar />
        <Navbar />
        <HeaderShop />

        <div className="container-fluid pt-5">

          <div className=" row px-xl-5 pb-3">



            {this.state.persons.map((item) => (

              <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                  <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src={item.images[0]} style={{ height: "350px" }} alt="" />
                  </div>
                  <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                    <div className="d-flex justify-content-center">
                      <h6>${item.price}</h6><h6 className="text-muted ml-2"><del>${item.discountPercentage}</del></h6>

                    </div>

                  </div>

                  <div className="card-footer d-flex justify-content-between bg-light border">
                    <a href="/details" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                    <a  className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    
                  </div>

                  
                </div>
              </div>
            ))}


          </div>
        </div>


        <Top />
        <Footer />
      </div>
    )
  }
}

export default AllShop
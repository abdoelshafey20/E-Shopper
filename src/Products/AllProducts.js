import { CartProvider, useCart } from "react-use-cart";
import ApiData from "./ApiData";
import Topbar from "../Topbar";
import Navbar from "../Navbar";
import Top from "../Top";
import Footer from "../Footer";

function Page() {
  const { addItem } = useCart();



  return (
    <div>

      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          {ApiData.map((item) => (
            <div className="col-lg-4 col-md-6 pb-1">
              <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
                <p className="text-right">15 Products</p>
                <a href="" className="cat-img position-relative overflow-hidden mb-3">
                  <img className="img-fluid w-75" src={item.images[0]} style={{height:"300px"}} alt="" />
                </a>
                <h5 className="font-weight-semi-bold m-0">{item.description}</h5>
                <div className="card-footer mt-2 d-flex justify-content-between bg-light border">
                    <a href="/details" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                    <button onClick={() => addItem(item)} 
                     className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</button>
                  </div>

              </div>
            </div>
          ))}

        </div>



      </div>
     
    </div>
  );
}
 

function AllProducts() {
  return (
    <CartProvider>
      <Topbar />
      <Navbar />
      <Page/>
      
      <Top />
      <Footer />
    </CartProvider>
  );
}
export default AllProducts;















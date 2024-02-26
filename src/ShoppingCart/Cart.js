import React from 'react'
import { useCart, CartProvider } from 'react-use-cart';
import { Link } from 'react-router-dom';
function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem, emptyCart, cartTotal, 
    } = useCart();

    if (isEmpty) return <h2 className="text-center">Your cart is empty</h2>;
 
    return (
        <CartProvider>
            <h1 className='text-center mr-5'>Cart ({totalUniqueItems})
                <button className="btn btn-danger" onClick={() => emptyCart()}>Delete All Items</button>
            </h1>

            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-bordered table-hover table-striped text-dark   text-center mb-0">
                            <thead className="bg-secondary text-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">

                                {items.map((item) => (
                                    <tr key={item.id}>



                                        <td className="align-middle"><img src={item.images[0]} alt="" style={{ width: "85px", height: "85px" }} /> Colorful Stylish Shirt</td>
                                        <td className="align-middle">${item.price}</td>
                                        <td className="align-middle">
                                            <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                                <input type="text" className="form-control form-control-sm bg-secondary text-center" value={item.quantity} />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">${item.price * item.quantity}</td>
                                        <td className="align-middle"><button onClick={() => removeItem(item.id)} className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>



                                    </tr>


                                ))}




                            </tbody>

                            <tfoot>


                                <tr>
                                    <td>

                                        <Link to="/products" className='btn btn-primary  form-control m-auto'> Continue Shopping</Link>

                                    </td>

                                </tr>

                            </tfoot>


                        </table>
                    </div>
                    <div className="col-lg-4">
                        <form className="mb-5" action="">
                            <div className="input-group">
                                <input type="text" className="form-control p-4" placeholder="Coupon Code" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Apply Coupon</button>
                                </div>
                            </div>
                        </form>

                        <div className="card border-secondary mb-5">
                            <div className="card-header bg-secondary border-0">
                                <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-3 pt-1">
                                    <h6 className="font-weight-medium">Subtotal</h6>
                                    <h6 className="font-weight-medium">${cartTotal}</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Shipping</h6>
                                    <h6 className="font-weight-medium">$500</h6>
                                </div>
                            </div>
                            <div className="card-footer border-secondary bg-transparent">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5 className="font-weight-bold">Total</h5>
                                    <h5 className="font-weight-bold">${cartTotal - 500}</h5>
                                </div>
                                <Link to="/checkout" className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </CartProvider>
    );
}



export default Cart
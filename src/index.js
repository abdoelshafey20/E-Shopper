
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import App from "./App";
import AllShop from "./Shop/AllShop";
import AllDetails from "./Details/AllDetails";
import AllContact from "./Contact/AllContact";
import AllCheckout from "./Checkout/AllCheckout";
import AllLogin from "./Login/AllLogin";
import { CartProvider } from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";
import AllProducts from "./Products/AllProducts";
import AllCart from "./ShoppingCart/AllCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,


  },
  {
    path: "shop",
    element: <AllShop />,
  },
  {
    path: "details",
    element: <AllDetails />,
  },
  {
    path: "contact",
    element: <AllContact />,
  },
  {
    path: "checkout",
    element: <AllCheckout />,
  },
  {
    path: "login",
    element: <AllLogin />,
  },
  {
    path: "products",
    element: <AllProducts />,
  },
  {
    path: "shoppingcart",
    element: <AllCart />,
  },



]);

createRoot(document.getElementById("root")).render(
  <CartProvider>

    <RouterProvider router={router} />

    <ScrollToTop smooth color="#000" viewBox="0 0 448 512" svgPath="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z" className="btn btn-primary back-to-top text-center "
      style={{ backgroundColor: "#fff;", width: "50px" }}
    />
  </CartProvider>

);




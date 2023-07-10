import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
// import Login from "../pages/login";
import Notfound from "../pages/Notfound";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import { SignupForm } from './../components/SignUpForm';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product-details/:id',
        element: <ProductDetails />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignupForm />,
  },
  {
    path: '*',
    element: <Notfound />,
  },
]);


export default routes;
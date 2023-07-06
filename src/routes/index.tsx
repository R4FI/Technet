import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
// import Login from "../pages/login";
import Notfound from "../pages/Notfound";
const routes  =  createBrowserRouter([
    {
        path: "/",
        element: <App/>,
      },
    {
        path: "/home",
        element: <Home/>,
      },
    // {
    //     path: "/login",
    //     element: <Login/>,
    //   },
    {
        path: "/*",
        element: <Notfound/>,
      },
])


export default routes;
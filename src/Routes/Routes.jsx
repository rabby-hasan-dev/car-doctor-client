import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login/Login";
import SignUp from "../components/pages/Login/SignUp/SignUp";
import CheckOut from "../components/pages/CheckOut/CheckOut";
import BookServices from "../components/BookServices/BookServices";
import Bookings from "../components/pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'book/:id',
                element: <BookServices></BookServices>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: 'bookings',
                element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>,

            },
            // {
            //     path: 'checkout/:id',
            //     element: <CheckOut></CheckOut>,
            //    loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            // }
        ]
    },
]);

export default router;
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../components/MyProfile";
import Banner from "../components/Banner";
import Loading from "../pages/Loading";
import MyProfileInfo from "../pages/MyProfileInfo";
import GameDetails from "../pages/GameDetails";
import PrivateRoute from "../provider/PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [

            {
                path: '/banner',
                element: <Banner></Banner>,
            }
        ]
    },
    {
        path: "/myprofile",
        element: <MyProfile></MyProfile>,
        children: [
            {
                path: '/myprofileinfo',
                element: <MyProfileInfo></MyProfileInfo>
            },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/gamedetails/:id',
        element: <PrivateRoute><GameDetails></GameDetails></PrivateRoute>,
        loader: () => fetch('/games.json'),
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: '/updateprofile',
        element: <UpdateProfile></UpdateProfile>,
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;
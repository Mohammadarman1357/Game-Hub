import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../components/MyProfile";
import PopularGames from "../components/PopularGames";
import Banner from "../components/Banner";
import Loading from "../pages/Loading";
import MyProfileInfo from "../pages/MyProfileInfo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [

            {
                path: '/banner',
                loader: () => fetch('/games.json'),
                element: <Banner></Banner>,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/populargame',
                element: <PopularGames></PopularGames>,
                hydrateFallbackElement: <Loading></Loading>
            },
        ]
    },
    {
        path: "/myprofile",
        element: <MyProfile></MyProfile>,
        children: [
            {
                path: '/myprofileinfo',
                element: <MyProfileInfo></MyProfileInfo>
            }
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
    // {
    //     path: '/news-details/:id',
    //     element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
    //     loader: () => fetch('/news.json'),
    //     hydrateFallbackElement: <Loading></Loading>
    // },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;
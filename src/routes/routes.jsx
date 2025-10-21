import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <h1>home</h1>
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
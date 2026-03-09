import Login from "../Pages/Auth/Login"
import Onboarding from "../Pages/Auth/Onboarding"
import Register from "../Pages/Auth/Register"
import VerifyEmail from "../Pages/Auth/VerifyEmail"

export const PageItems = [
    {
        path: "/login",
        element: <Login />,
        isAuth: false
    },
    {
        path: "/register",
        element: <Register />,
        isAuth: false
    },
    {
        path: "/onboarding",
        element: <Onboarding />,
        isAuth: false
    },
    {
        path: "/verifyEmail",
        element: <VerifyEmail />,
        isAuth: false
    }
]
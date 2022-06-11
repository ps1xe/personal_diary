import { ConstsRoutes } from "./utils/consts"
import Home from "./components/Home"
import Login from "./components/Login"
import Registration from "./components/Registration"

export const authRoutes = [

    {
        path: ConstsRoutes.USER_ROUTE,
        Component: Home
    }

]

export const publicRoutes = [

    {
        path: ConstsRoutes.LOGIN_ROUTE,
        Component: Login
    },

    {
        path: ConstsRoutes.REGISTRATION_ROUTE,
        Component: Registration
    }

]
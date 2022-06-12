import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { authRoutes, publicRoutes } from "./routes";
import { AuthReducer } from "./types/auth/authTypes";

const AppRouter = () => {

    const isAuth = !!localStorage.getItem('token')
    return (

        <Routes >

            {isAuth === true && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} />
            )}

            {publicRoutes.map(({ path, Component }) =>

                <Route key={path} path={path} element={<Component />} />

            )}
        </Routes>

    );
}
export default AppRouter;
import { Route, Routes } from "react-router-dom";
import { isAuth } from "./redux/saga/auth/authSagas";
import { authRoutes, publicRoutes } from "./routes";
const AppRouter = () => {

    console.log();
    return (
        <Routes >

            {isAuth === true && authRoutes.map(({ path, Component }) =>
                <Route index element={<Component />} />
            )}

            {publicRoutes.map(({ path, Component }) =>

                <Route key={path} path={path} element={<Component />} />

            )}

        </Routes>

    );
}
export default AppRouter;
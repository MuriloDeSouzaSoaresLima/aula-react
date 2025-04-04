import { BrowserRouter, Routes, Route } from "react-router-dom";
import { APP_ROUTES } from "./AppConfig";
import PHome from "./pages/PHome/PHome";
import Plogin from "./pages/PLogin/PLogin";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={APP_ROUTES.ROUTE_HOME} element={<PHome/>}/>
                <Route path={APP_ROUTES.ROUTE_LOGIN} element={<Plogin/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
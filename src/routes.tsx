import { BrowserRouter, Routes, Route } from "react-router-dom";
import { APP_ROUTES } from "./AppConfig";

import PHome from "./pages/PHome/PHome";
import Plogin from "./pages/PLogin/PLogin";
import PhAluno from "./pages/PAluno/PAluno";
import PhLivro from "./pages/PLivro/Plivro";
import PhEmprestimo from "./pages/PEmprestimo/PEmprestimo";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={APP_ROUTES.ROUTE_HOME} element={<PHome />} />
                <Route path={APP_ROUTES.ROUTE_LOGIN} element={<Plogin />} />
                <Route path={APP_ROUTES.ROUTE_ALUNOS} element={<PhAluno />} />
                <Route path={APP_ROUTES.ROUTE_LIVROS} element={<PhLivro />} />
                <Route path={APP_ROUTES.ROUTE_EMPRESTIMOS} element={<PhEmprestimo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;

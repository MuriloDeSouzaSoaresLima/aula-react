import estilo from './cabecalho.module.css';
import logotipo from '../../assets/logotipo.png';
import { APP_ROUTES } from '../../AppConfig';

function Cabecalho() {
    return (
        <header className={estilo.cabecalho}>
            <a href={APP_ROUTES.ROUTE_HOME} className={estilo.imgLogo}>
                <img src={logotipo} alt="logotipo" />
            </a>
            
            <nav className={estilo.navegacao}>
                <a href={APP_ROUTES.ROUTE_LOGIN}>Login</a>
                <a href={APP_ROUTES.ROUTE_ALUNOS}>Alunos</a>
                <a href={APP_ROUTES.ROUTE_LIVROS}>Livros</a>
                <a href={APP_ROUTES.ROUTE_EMPRESTIMOS}>Empréstimos</a>
            </nav>
        </header>
    );
}

export default Cabecalho;

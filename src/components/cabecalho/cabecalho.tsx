import estilo from './cabecalho.module.css';
import logotipo from '../../assets/logotipo.png';
import { APP_ROUTES } from '../../AppConfig';

function Cabecalho() {
    return (
        <header className={estilo.cabecalho}>
            <a href={APP_ROUTES.ROUTE_HOME}
                className={estilo.imgLogo}>
                <img src={logotipo} alt="logotipo" />
                </a>
            <a href={APP_ROUTES.ROUTE_LOGIN}>Login</a>
        </header>
    );
    
}

export default Cabecalho
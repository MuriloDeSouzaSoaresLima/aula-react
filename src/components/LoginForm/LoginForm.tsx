import estilo from './LoginForm.module.css';

function LoginForm() {
    return (
        <section className={estilo.formSection}>
            <h3>LOGIN</h3>

            <form action="" className={estilo.formLogin}>
                <label>
                    E-mail
                    <input
                        type="email"
                        placeholder='Informe o seu email'
                        className={estilo['input-email-Login']} />
                </label>
                <label>
                    Senha
                    <input 
                        type="password"
                        placeholder='Informe sua senha'
                        className={estilo['input-password-Login']} />
                </label>

                <input type="button" 
                value="Entrar"
                className={estilo['input-button-login']} />
            </form>
        </section>
    )
}

export default LoginForm
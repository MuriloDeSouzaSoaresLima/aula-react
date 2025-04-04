import estilo from './Welcome.module.css'
import { useEffect, useState } from 'react';
import AlunoRequests from '../../fetch/AlunoRequests';

function Welcome() {
    const [alunos, setAlunos] = useState('');

    useEffect(() => {
        const fetchAlunos = async () => {
        try {
            const aluno = await AlunoRequests.listaAlunos();
            setAlunos(JSON.stringify(aluno));
            console.table(alunos)
        } catch (error) {
            console.error(`Erro ao chamar a API: ${error}`)
        }
    };
    fetchAlunos();
    }, []);

    return (
        <main className={estilo.principal}>
            <p>Seja bem-vindo(a) à biblioteca.</p>
            <p>Para ter uma melhor experiência, faça o login o site</p>
        </main>
    )
}

export default Welcome;
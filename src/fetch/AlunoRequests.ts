import { SERVER_CFG } from "../AppConfig";

class AlunoRequests {

    private serverURL;
    private routeListaAluno;
    private routeCadastraAluno;
    private routeAtualizaAluno;
    private routeRemoveAluno;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaAluno = '/lista/alunos';
        this.routeCadastraAluno = '/novo/aluno';
        this.routeAtualizaAluno = '/atualiza/aluno';
        this.routeRemoveAluno = '/remove/aluno';
    }





    async listaAlunos() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaAluno}`);

            if(respostaAPI.ok) {
                const listaAlunos = await respostaAPI.json
                return listaAlunos;
            }
        } catch (error) {
            console.error(`Erro ao fazer a consulta: ${error}`);
            return null;
        }
    }
    
}

export default new AlunoRequests();
import { useEffect, useState } from 'react';
import EmprestimoRequests from '../../../fetch/EmprestimoRequests';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import estilo from './TabelaEmprestimo.module.css';

// Util para formatar datas no padrão brasileiro
const formatarData = (data: string | number | Date) => {
    if (!data) return '';
    return new Date(data).toLocaleDateString('pt-BR');
};

function TabelaEmprestimo() {
    const [emprestimos, setEmprestimos] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" />;
    const paginatorRight = <Button type="button" icon="pi pi-download" />;

    useEffect(() => {
        const fetchEmprestimos = async () => {
            try {
                const lista = await EmprestimoRequests.listarEmprestimos();
                setEmprestimos(lista || []);
                console.table(lista);
            } catch (error) {
                console.error(`Erro ao buscar empréstimos: ${error}`);
            }
        };
        fetchEmprestimos();
    }, []);

    // Templates para colunas formatadas
    const nomeAlunoTemplate = (rowData: { aluno: { nome: any; sobrenome: any; }; }) => {
        return rowData.aluno ? `${rowData.aluno.nome} ${rowData.aluno.sobrenome}` : '';
    };

    const nomeLivroTemplate = (rowData: { livro: { titulo: any; }; }) => {
        return rowData.livro?.titulo || '';
    };

    const dataEmprestimoTemplate = (rowData: { dataEmprestimo: any; }) => {
        return formatarData(rowData.dataEmprestimo);
    };

    const dataDevolucaoTemplate = (rowData: { dataDevolucao: any; }) => {
        return formatarData(rowData.dataDevolucao);
    };

    return (
        <DataTable
            value={emprestimos}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            className={estilo.dataTable}
            tableStyle={{ minWidth: '60rem' }}
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} to {last} of {totalRecords}"
            paginatorLeft={paginatorLeft}
            paginatorRight={paginatorRight}
        >
            <Column header="Aluno" body={nomeAlunoTemplate} style={{ width: '20%' }} />
            <Column header="Livro" body={nomeLivroTemplate} style={{ width: '25%' }} />
            <Column field="statusEmprestimo" header="Status" style={{ width: '15%' }} />
            <Column header="Data Empréstimo" body={dataEmprestimoTemplate} style={{ width: '20%' }} />
            <Column header="Data Devolução" body={dataDevolucaoTemplate} style={{ width: '20%' }} />
        </DataTable>
    );
}

export default TabelaEmprestimo;

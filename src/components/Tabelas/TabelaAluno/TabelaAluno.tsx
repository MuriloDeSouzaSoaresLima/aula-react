import { useEffect, useState } from 'react';
import AlunoRequests from '../../../fetch/AlunoRequests';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import estilo from './TabelaAluno.module.css';

// Função para formatar a data para DD/MM/AAAA
const formatarData = (dataISO: string | number | Date) => {
    if (!dataISO) return '';
    const data = new Date(dataISO);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
};

function TabelaAluno() {
    const [alunos, setAlunos] = useState([]);

    const paginatorLeft = <Button type='button' icon="pi pi-refresh" />;
    const paginatorRight = <Button type='button' icon="pi pi-download" />;

    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const listaAlunos = await AlunoRequests.listarAlunos();
                setAlunos(listaAlunos);
                console.table(listaAlunos);
            } catch (error) {
                console.error(`Erro ao chamar a API: ${error}`);
            }
        };
        fetchAlunos();
    }, []);

    // Template para formatar data de nascimento
    const dataNascimentoTemplate = (rowData: { dataNascimento: any; }) => {
        return formatarData(rowData.dataNascimento);
    };

    return (
        <>
            <DataTable 
                value={alunos} 
                paginator 
                rows={5} 
                rowsPerPageOptions={[5, 10, 25, 50]} 
                className={estilo.dataTable}
                tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" 
                paginatorLeft={paginatorLeft} 
                paginatorRight={paginatorRight}
            >
                <Column field="ra" header="RA" style={{ width: '10%' }} />
                <Column field="nome" header="Nome" style={{ width: '15%' }} />
                <Column field="sobrenome" header="Sobrenome" style={{ width: '15%' }} />
                <Column field="dataNascimento" header="Data de Nascimento" body={dataNascimentoTemplate} style={{ width: '15%' }} />
                <Column field="endereco" header="Endereço" style={{ width: '15%' }} />
                <Column field="email" header="Email" style={{ width: '15%' }} />
                <Column field="celular" header="Celular" style={{ width: '15%' }} />
            </DataTable>
        </>
    );
}

export default TabelaAluno;

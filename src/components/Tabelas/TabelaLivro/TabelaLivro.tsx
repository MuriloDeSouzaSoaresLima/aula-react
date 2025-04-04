import { useEffect, useState } from 'react';
import LivroRequests from '../../../fetch/LivroRequests';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import estilo from './TabelaLivro.module.css';

// Formata o valor monetário corretamente (tratando undefined/null)
const formatarValor = (valor: number) => {
    if (!valor || isNaN(valor)) return 'R$ 0,00';
    return Number(valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
};

function TabelaLivro() {
    const [livros, setLivros] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" />;
    const paginatorRight = <Button type="button" icon="pi pi-download" />;

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const listaLivros = await LivroRequests.listarLivros();
                setLivros(listaLivros || []); // Evita erro se lista for null
                console.table(listaLivros);
            } catch (error) {
                console.error(`Erro ao buscar livros: ${error}`);
            }
        };
        fetchLivros();
    }, []);

    // Template para formatar o valor de aquisição
    const valorAquisicaoTemplate = (rowData: { valorAquisicao: any; }) => {
        return formatarValor(rowData?.valorAquisicao); // Protege contra erro de undefined
    };

    return (
        <>
            <DataTable 
                value={livros}
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
                <Column field="titulo" header="Título" style={{ width: '25%' }} />
                <Column field="autor" header="Autor" style={{ width: '20%' }} />
                <Column field="editora" header="Editora" style={{ width: '20%' }} />
                <Column field="isbn" header="ISBN" style={{ width: '20%' }} />
                <Column field="valorAquisicao" header="Valor (R$)" body={valorAquisicaoTemplate} style={{ width: '15%' }} />
            </DataTable>
        </>
    );
}

export default TabelaLivro;

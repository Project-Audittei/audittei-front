import NavegacaoInterna, { INavegacaoInternaTab } from "../../components/NavegacaoInterna/NavegacaoInterna";

export default function NavegacaoInternaContent() {
    const tabs: INavegacaoInternaTab[] = [
        { id: 1, titulo: 'Balanço Patrimonial', conteudo: (<> <h3>Teste 1</h3> </>) },
        { id: 2, titulo: 'DRE', conteudo: (<> <h3>Teste 2</h3> </>) },
        { id: 3, titulo: 'DFC', conteudo: (<> <h3>Teste 3</h3> </>) },
        { id: 4, titulo: 'Análise de Despesas', conteudo: (<> <h3>Teste 3</h3> </>) }
    ];
    return (
        <>
            <h1 className="titulo-pagina">13. Navegação Interna</h1>
            <div className="row mt-2">
                <NavegacaoInterna
                    tabs={tabs}
                    inicial={tabs[0]}
                />
            </div>
        </>
    );
}
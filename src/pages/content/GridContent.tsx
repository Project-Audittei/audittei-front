import GridCelular from "../../components/Grid-Exemplos/GridCelular";
import GridDesktop from "../../components/Grid-Exemplos/GridDesktop";
import GridTablet from "../../components/Grid-Exemplos/GridTablet";
import NavegacaoInterna, { INavegacaoInternaTab } from "../../components/NavegacaoInterna/NavegacaoInterna";

export default function GridContent() {
    
    const tabs: INavegacaoInternaTab[] = [
        { id: 1, titulo: 'Celular', conteudo: <GridCelular /> },
        { id: 2, titulo: 'Tablet', conteudo: <GridTablet /> },
        { id: 3, titulo: 'Desktop', conteudo: <GridDesktop /> },
    ];

    return (
        <>
            <h1 className="titulo-pagina">01. Grid</h1>
            <div className="row mt-3">
                <NavegacaoInterna
                    tabs={tabs}
                    inicial={tabs[0]}
                />
            </div>
        </>
    );
}
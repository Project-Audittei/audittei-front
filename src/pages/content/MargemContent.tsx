import MargemCelular from "../../components/Margem/exemplos/MargemCelular";
import MargemDesktop from "../../components/Margem/exemplos/MargemDesktop";
import MargemTablet from "../../components/Margem/exemplos/MargemTablet";
import NavegacaoInterna, { INavegacaoInternaTab } from "../../components/NavegacaoInterna/NavegacaoInterna";

export default function MargemContent() {

    const tabs: INavegacaoInternaTab[] = [
        { id: 1, titulo: "Celular", conteudo: <MargemCelular /> },
        { id: 2, titulo: "Tablet", conteudo: <MargemTablet /> },
        { id: 3, titulo: "Desktop", conteudo: <MargemDesktop /> }
    ];

    return(
        <>
            <h1 className="titulo-pagina">02. ESPAÇAMENTO VERTICAL - Múltiplo de 8</h1>
            <div className="row mt-3">
                <NavegacaoInterna
                    tabs={tabs}
                    inicial={tabs[0]}
                />
            </div>
        </>
    );
}
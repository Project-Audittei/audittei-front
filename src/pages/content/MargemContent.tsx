import Margem from "../../components/Margem/Margem";
import NavegacaoInterna, { INavegacaoInternaTab } from "../../components/NavegacaoInterna/NavegacaoInterna";

export default function MargemContent() {

    const tabs: INavegacaoInternaTab[] = [
        { id: 1, titulo: "Celular", conteudo: <Margem tipo="celular" /> },
        { id: 2, titulo: "Tablet", conteudo: <Margem tipo="tablet" /> },
        { id: 3, titulo: "Desktop", conteudo: <Margem tipo="desktop" /> }
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
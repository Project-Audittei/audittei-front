import MargemCelular from "../../components/Margem-Exemplos/MargemCelular";
import NavegacaoInterna, { INavegacaoInternaTab } from "../../components/NavegacaoInterna/NavegacaoInterna";

export default function MargemContent() {

    const tabs: INavegacaoInternaTab[] = [
        { id: 1, titulo: "Celular", conteudo: <MargemCelular /> }
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
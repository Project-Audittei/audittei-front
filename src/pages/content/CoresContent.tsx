import { CoresBG, CoresBorda, CoresMain, CoresTexto } from "../../components/Cores-Exemplo/Cores";
import NavegacaoInterna, { INavegacaoInternaTab } from "../../components/NavegacaoInterna/NavegacaoInterna";

export default function CoresContent() {

    const tabs: INavegacaoInternaTab[] = [
        { id: 1, titulo: "Main", conteudo: <CoresMain /> },
        { id: 2, titulo: "Background", conteudo: <CoresBG /> },
        { id: 3, titulo: "Borda", conteudo: <CoresBorda /> },
        { id: 4, titulo: "Texto", conteudo: <CoresTexto /> },
    ];

    return (
        <>
            <h1 className="titulo-pagina mb-4">05. Cores</h1>
            <NavegacaoInterna  
                tabs={tabs}
                inicial={tabs[0]}
            />
        </>
    );
}
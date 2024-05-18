import Inputs from "../../components/Form/exemplos/Inputs";
import TextAreaExemplo from "../../components/Form/exemplos/TextAreaExemplo";
import SelectExemplos from "../../components/Form/exemplos/SelectExemplos";
import NavegacaoInterna, { INavegacaoInternaTab } from "../../components/NavegacaoInterna/NavegacaoInterna";
import CheckboxExemplos from "../../components/Form/exemplos/CheckboxExemplos";

export default function CamposDeTextoContent() {

    const tabs: INavegacaoInternaTab[] = [
        { id: 1, titulo: 'Caixas de Texto', conteudo: <Inputs  /> },
        { id: 2, titulo: 'Text Area', conteudo: <TextAreaExemplo  /> },
        { id: 3, titulo: 'Select', conteudo: <SelectExemplos  /> },
        { id: 4, titulo: 'Checkbox', conteudo: <CheckboxExemplos  /> }
    ];

    return (
        <>
            <h1 className="titulo-pagina">07. Campos de Texto</h1>
            <NavegacaoInterna
                tabs={tabs}
                inicial={tabs[0]}
            />
            
            
        </>
    );
}
import Inputs from "../../components/Form/exemplos/Inputs";
import TextAreaExemplo from "../../components/Form/exemplos/TextAreaExemplo";
import SelectExemplos from "../../components/Form/exemplos/SelectExemplos";
import NavegacaoInterna, { INavegacaoInternaTab } from "../../components/NavegacaoInterna/NavegacaoInterna";
import CheckboxExemplos from "../../components/Form/exemplos/CheckboxExemplos";
import RadioButtonExemplos from "../../components/Form/exemplos/RadioButtonExemplos";
import ToggleSwitchExemplos from "../../components/Form/exemplos/ToggleSwitchExemplos";
import FileUploadExemplos from "../../components/Form/exemplos/FileUploadExemplos";
import BarraProgressoExemplos from "../../components/Form/exemplos/BarraProgressoExemplos";

export default function CamposDeTextoContent() {

    const tabs: INavegacaoInternaTab[] = [
        { id: 1, titulo: 'Caixas de Texto', conteudo: <Inputs  /> },
        { id: 2, titulo: 'Text Area', conteudo: <TextAreaExemplo  /> },
        { id: 3, titulo: 'Select', conteudo: <SelectExemplos  /> },
        { id: 4, titulo: 'Checkbox', conteudo: <CheckboxExemplos  /> },
        { id: 5, titulo: 'Radio', conteudo: <RadioButtonExemplos  /> },
        { id: 6, titulo: 'Toggle', conteudo: <ToggleSwitchExemplos  /> },
        { id: 7, titulo: 'File Upload', conteudo: <FileUploadExemplos  /> },
        { id: 8, titulo: 'Barra de Progresso', conteudo: <BarraProgressoExemplos  /> },
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
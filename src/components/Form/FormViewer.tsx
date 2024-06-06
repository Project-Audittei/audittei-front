import { Pencil } from "lucide-react";
import Botao from "../Botoes/Botao";
import FormContainer from "./FormContainer";
import FormField from "./FormField";
import { useState } from "react";
import { SelectOptionsType } from "./Selecao";

interface FormViewerProps {
    secao: IFormSecao;
}

export interface IForm {
    secoes: IFormSecao[];
}

interface IFormSecao {
    title: string;
    rows?: IFormRows[];
    campos?: IFormCampo[];
}

interface IFormRows {
    cols?: IFormCol[];
}

interface IFormCol extends IFormCampoImplementavel {
    
}

interface IFormCampoImplementavel {
    campos?: IFormCampo[];
}

interface IFormCampo {
    label: string;
    value: any;
    tipo: React.HTMLInputTypeAttribute | 'select';
    setValue: (e:any) => void;
    modoEdicao?: boolean;
    opcoes?: SelectOptionsType[];
}

export default function FormViewer({ secao }: FormViewerProps) {

    const [modoEdicao, setModoEdicao] = useState(false);

    const HandleEditarForm = () => {
        setModoEdicao(true);
    }

    const HandleSalvarAlteracoes = () => {
        setModoEdicao(false);
    }

    return (
        <div className="row form-viewer">
            <div className="col">
                <div className="row mb-2 mt-4">
                    <div className="col">
                        <h5>{ secao.title }</h5>
                    </div>
                    <div className="col">
                        <div className="row row-align-right">
                            { !modoEdicao ?
                                <Botao
                                    className="ml-1"
                                    tamanho="ExtraSmall"
                                    estilo="Primary"
                                    icone={<Pencil size={16} />}
                                    label="Editar"
                                    onClick={HandleEditarForm}
                                /> : 
                                <Botao
                                    className="ml-1"
                                    tamanho="ExtraSmall"
                                    estilo="Primary"
                                    icone={<Pencil size={16} />}
                                    label="Salvar"
                                    onClick={HandleSalvarAlteracoes}
                                />
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <FormContainer>
                                { secao.campos!.map( campo => (
                                    <FormField opcoes={campo.opcoes} label={ campo.label } value={ campo.value } setValue={ campo.setValue } tipo={ campo.tipo } modoEdicao={ modoEdicao } />
                                ) ) }
                            </FormContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
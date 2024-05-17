import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import MensagemValidacao, { MensagensValidacao } from "./MensagemValidacao";

interface SelecaoPropsType extends React.InputHTMLAttributes<HTMLSelectElement> {
    opcoes: SelectOptionsType[];
    mensagensValidacao?: MensagensValidacao;
    icone?: JSX.Element;
    label?: string;
    estado?: EstadosForcaInputType;
}

export type EstadosForcaInputType = 'padrao' | 'desabilitado' | 'aviso' | 'erro' | 'carregando' | 'valido';

export type SelectOptionsType = {
    id: number;
    name: string;
}

export default function Selecao({
    name,
    id,
    value, 
    opcoes, 
    estado = 'padrao',
    mensagensValidacao,
    disabled,
    onChange
}: SelecaoPropsType) {
    const [classEstado, setClassEstado] = useState<string>('');

    useEffect(() => {
        switch(estado) {
            case 'aviso':
                setClassEstado('aviso');
                break;
            case 'erro':
                setClassEstado('erro');
                break;
            case 'carregando':
                setClassEstado('carregando');
                break;
            case 'valido':
                setClassEstado('valido');
                break;

            case 'desabilitado':
                setClassEstado('');
                break;
    
            default:
                setClassEstado('');
                break;
        }
    }, [estado]);

    return (
        <div className="input-group">
            <div className={`form-group ${classEstado}`} >
                <select 
                    id={ id }
                    className="form-control" 
                    name={ name }
                    value={ value }
                    onChange={ onChange }
                    disabled={ disabled }
                >
                    { opcoes.map( item => (<option key={ item.id } value={ item.id }>{ item.name }</option>)) }
                </select>
                { <div className="icone icone-direita"><ChevronDown size={24} /></div> ?? '' }
            </div>
            <MensagemValidacao mensagens={ mensagensValidacao } tipo={ estado } />
        </div>
    );
}

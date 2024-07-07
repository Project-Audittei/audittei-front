import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import MensagemValidacao, { MensagensValidacao } from "./MensagemValidacao";
import { EstadosForcaType } from "../../@types/EstadoForca";

interface SelecaoPropsType extends React.InputHTMLAttributes<HTMLSelectElement> {
    opcoes: SelectOptionsType[];
    mensagensValidacao?: MensagensValidacao;
    icone?: JSX.Element;
    label?: string;
    estado?: EstadosForcaType;
}

export type SelectOptionsType = {
    id: number | string;
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
    onChange,
    className
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
        <div className={`input-group ${className}`}>
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

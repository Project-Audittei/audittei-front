import { useEffect, useState } from "react";
import MensagemValidacao, { MensagensValidacao } from "./MensagemValidacao";
import { EstadosForcaType } from "../../@types/EstadoForca";

interface TextAreaPropsType extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    mensagensValidacao?: MensagensValidacao;
    icone?: JSX.Element;
    label?: string;
    estado?: EstadosForcaType;
}

export default function TextArea({
    name, 
    label,
    placeholder, 
    value,
    id,
    estado = 'padrao',
    mensagensValidacao,
    disabled,
    onChange
}: TextAreaPropsType) {
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
            <div className={`form-group ${classEstado}`}>
                { label ? <label htmlFor={ name }>{ label }</label> : ''}
                <textarea 
                    placeholder={placeholder}
                    name={name}
                    id={id}
                    className="form-control" 
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                ></textarea>
            </div>
            <MensagemValidacao mensagens={mensagensValidacao} tipo={estado} />
        </div>
    );
}

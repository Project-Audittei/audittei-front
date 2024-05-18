import { useState, useEffect } from "react";
import MensagemValidacao, { MensagensValidacao } from "./MensagemValidacao";
import { EstadosForcaType } from "../../@types/EstadoForca";

interface CheckboxPropsType extends React.InputHTMLAttributes<HTMLInputElement> {
    mensagensValidacao?: MensagensValidacao;
    icone?: JSX.Element;
    label?: string;
    estado?: EstadosForcaType;
}

export default function Checkbox({
    name,
    id,
    checked,
    estado = 'padrao',
    mensagensValidacao,
    disabled,
    onChange
}: CheckboxPropsType) {
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
        <label className="checkbox-container">
            <div className={`form-group ${classEstado}`} >
                <input type="checkbox" name={ name } id={ id } checked={checked} onChange={onChange} disabled={disabled} />
            </div>
            <span className="checkmark"></span>
            <MensagemValidacao mensagens={ mensagensValidacao } tipo={ estado } />
        </label>
    );
}
import { useState, useEffect } from "react";
import { EstadosForcaType } from "../../@types/EstadoForca";
import { MensagensValidacao } from "./MensagemValidacao";

interface CheckboxPropsType extends React.InputHTMLAttributes<HTMLInputElement> {
    mensagensValidacao?: MensagensValidacao;
    icone?: JSX.Element;
    label?: string;
    estado?: EstadosForcaType;
}

export default function ToggleSwitch({
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
        <div className={`form-group ${classEstado}`}>
            <span className="toggle-switch">
                <input id="switch-rounded" type="checkbox" checked={ checked } onChange={ onChange } disabled={ disabled }/>
                <label htmlFor="switch-rounded"></label>
            </span>
        </div>
    );
}
import { useState, useEffect } from "react";
import { EstadosForcaType } from "../../@types/EstadoForca";

interface CheckboxPropsType extends React.InputHTMLAttributes<HTMLInputElement> {
    icone?: JSX.Element;
    label?: string;
    estado?: EstadosForcaType;
}

export default function RadioButton({
    name,
    id,
    checked,
    estado = 'padrao',
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
        <label className="radio-container">
            <div className={`form-group ${classEstado}`} >
                <input className="form-control" type="radio" name={ name } id={ id } checked={checked} onChange={onChange} disabled={disabled} />
                <span className="checkmark"></span>
            </div>
        </label>
    );
}
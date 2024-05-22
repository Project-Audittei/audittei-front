import { useState, useEffect } from "react";
import { EstadosForcaType } from "../../@types/EstadoForca";

interface CheckboxPropsType extends React.InputHTMLAttributes<HTMLInputElement> {
    icone?: JSX.Element;
    label?: string;
    estado?: EstadosForcaType;
}

export default function Checkbox({
    name,
    id,
    checked,
    estado = 'padrao',
    disabled,
    onChange,
    label
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
        <div className="checkbox">
            <label className="checkbox-container">
                <div className={`form-group ${classEstado}`} >
                    <input className="form-control" type="checkbox" name={ name ?? 'checkbox-item' } id={ id ?? 'checkbox-item' } checked={checked} onChange={onChange} disabled={disabled} />
                    <span className="checkmark"></span>
                </div>
            </label>
            { label ? <label htmlFor={ id ?? 'checkbox-item' } className="checkbox-label">{ label }</label> : '' }
        </div>
    );
}
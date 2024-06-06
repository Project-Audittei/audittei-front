import { EyeIcon, Search } from "lucide-react";
import { useEffect, useState } from "react";
import MensagemValidacao, { MensagensValidacao } from "./MensagemValidacao";
import { EstadosForcaType } from "../../@types/EstadoForca";

interface InputPropsType extends React.InputHTMLAttributes<HTMLInputElement> {
    type: React.HTMLInputTypeAttribute;
    icone?: JSX.Element;
    label?: string;
    estado?: EstadosForcaType;
    mensagensValidacao?: MensagensValidacao;
}

export default function Input({ 
    type, 
    name, 
    label, 
    icone, 
    placeholder, 
    value,
    estado = 'padrao',
    mensagensValidacao,
    disabled,
    onChange,
    onInput,
    onInputCapture,
    max,
    className
}: InputPropsType) {

    const [classEstado, setClassEstado] = useState<string>('');

    const [mostrarSenha, setMostrarSenha] = useState<boolean>(false);

    const HandleMostrarSenha = () => {
        return setMostrarSenha(!mostrarSenha);
    }

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

    switch(type) {
        case 'checkbox':
            return (
                <div className={`form-group`}>
                    <input 
                        type="checkbox" 
                        name={name} 
                        className="form-control"
                        disabled={disabled}
                        value={value}
                        onChange={onChange}
                        onInput={onInput}
                        onInputCapture={onInputCapture}
                    />
                </div>
            );

        case 'search':
            return (
                <div className={`form-group`}>
                    { <div className="icone icone-esquerda"><Search size={24} /></div> ?? '' }
                    <input 
                        type="search" 
                        name={name} 
                        className="form-control" 
                        placeholder={ placeholder ?? " " } 
                        disabled={disabled}
                        value={value}
                        onChange={onChange} 
                        onInput={onInput}
                        onInputCapture={onInputCapture}
                    />
                    <label htmlFor={ name }>{ label ?? 'Procurar' }</label>
                </div>
            );
        
        case 'password':
            return (
                <div className="input-group">
                    <div className={`form-group ${classEstado}`}>
                        <input 
                            type={ !mostrarSenha ? "password" : "text" } 
                            name={name} 
                            className="form-control"
                            value={value}
                            onChange={onChange}
                            disabled={disabled} 
                            placeholder={ placeholder ?? " " }
                            onInput={onInput}
                            onInputCapture={onInputCapture}
                        />
                        <label htmlFor={ name }>{ label ?? 'Senha' }</label>
                        <div className="icone icone-direita icone-mostrar-senha" onMouseDown={ HandleMostrarSenha } onMouseUp={ HandleMostrarSenha } ><EyeIcon size={24} /></div>
                    </div>
                    <MensagemValidacao mensagens={mensagensValidacao} tipo={estado} />
                </div>
            );

        case "number":
            return (
                <div className={`input-group ${className}`}>
                    <div className={`form-group ${classEstado}`}>
                        <input 
                            type="number"
                            max={max} 
                            name={ name } 
                            className="form-control" 
                            value={ value } 
                            disabled={ disabled }
                            onChange={onChange}
                            placeholder={ placeholder ?? " " }
                            onInput={onInput}
                            onInputCapture={onInputCapture}
                        />
                        { label ? <label htmlFor={ name }>{ label }</label> : '' }
                        { <div className="icone icone-direita">{ icone }</div> ?? '' }
                    </div>
                    { mensagensValidacao ? <MensagemValidacao mensagens={mensagensValidacao} tipo={estado} /> : '' }
                </div>
            );

        default:
            return (
                <div className="input-group">
                    <div className={`form-group ${classEstado}`}>
                        <input 
                            type="text" 
                            name={ name } 
                            className="form-control" 
                            value={ value } 
                            disabled={ disabled }
                            onChange={onChange}
                            placeholder={ placeholder ?? " " }
                            onInput={onInput}
                            onInputCapture={onInputCapture}
                        />
                        { label ? <label htmlFor={ name }>{ label }</label> : '' }
                        { <div className="icone icone-direita">{ icone }</div> ?? '' }
                    </div>
                    { mensagensValidacao ? <MensagemValidacao mensagens={mensagensValidacao} tipo={estado} /> : '' }
                </div>
            );
    }
    
}
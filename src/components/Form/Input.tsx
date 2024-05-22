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
    onChange
}: InputPropsType) {

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
                        placeholder={ placeholder ?? "Texto" } 
                        disabled={disabled}
                        value={value}
                        onChange={onChange} 
                    />
                </div>
            );
        
        case 'password':
            return (
                <div className="input-group">
                    <div className={`form-group ${classEstado}`}>
                        <label htmlFor={ name }>{ label ?? 'Senha' }</label>
                        <input 
                            type="password" 
                            name={name} 
                            className="form-control"
                            value={value}
                            onChange={onChange}
                            disabled={disabled} 
                            placeholder={ placeholder }
                        />
                        <div className="icone icone-direita"><EyeIcon size={24} /></div>
                    </div>
                    <MensagemValidacao mensagens={mensagensValidacao} tipo={estado} />
                </div>
            );

        default:
            return (
                <div className="input-group">
                    <div className={`form-group ${classEstado}`}>
                        { label ? <label htmlFor={ name }>{ label }</label> : '' }
                        <input 
                            type="text" 
                            name={ name } 
                            className="form-control" 
                            value={ value } 
                            disabled={ disabled }
                            onChange={onChange}
                            placeholder={ placeholder }
                        />
                        { <div className="icone icone-direita">{ icone }</div> ?? '' }
                    </div>
                    { mensagensValidacao ? <MensagemValidacao mensagens={mensagensValidacao} tipo={estado} /> : '' }
                </div>
            );
    }
    
}
import { ChevronDown } from "lucide-react";
import { MouseEventHandler, useState } from "react";

export type BotaoTamanho = "Large" | "Normal" | "Medium" | "Small" | "ExtraSmall";
export type BotaoEstilo = 'Primary' | 'Secondary' | 'Third' | 'Menu' | 'Icone' | 'Danger';

interface BotaoPropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    estilo: BotaoEstilo;
    tamanho: BotaoTamanho;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    icone?: JSX.Element;
    iconePosicao?: "esquerda" | "direita";
    somenteIcone?: boolean;
    notificacoes?: number;
    tamanhoAutomatico?: boolean;
    subitens?: any[];
}

export default function Botao({ 
    label, 
    tamanho, 
    icone, 
    iconePosicao, 
    estilo, 
    onClick, 
    className, 
    style, 
    disabled, 
    somenteIcone,
    notificacoes,
    tamanhoAutomatico,
    subitens
}: BotaoPropsType) {

    const [btnEstilo, setBtnEstilo] = useState<string>('');
    const [btnTamanho, setBtnTamanho] = useState<string>('');

    const [btnIconeMargin, setBtnIconeMargin] = useState('');
    const [prefix] = useState(somenteIcone ? 'btn-icone' : 'btn');

    if(btnTamanho === '') {
        switch(tamanho) {
            case "Large":
                setBtnTamanho(prefix + '-large');
                break;
            
            case "Medium":
                setBtnTamanho(prefix + '-medium');
                break;
            
            case "Normal":
                setBtnTamanho(prefix + '-normal');
                break;
    
            case "Small":
                setBtnTamanho(prefix + '-small');
                break;
    
            case "ExtraSmall":
                setBtnTamanho(prefix + '-extraSmall');
                break;
        }
    }

    if(btnEstilo === '') {
        switch(estilo) {
            case "Primary":
                setBtnEstilo(`${className ?? ''} ${ tamanhoAutomatico ? 'btn-auto' : '' } ${prefix}-primary`);
                break;
    
            case "Secondary":
                setBtnEstilo(`${ className ?? ''} ${ tamanhoAutomatico ? 'btn-auto' : '' } ${prefix}-secondary`);
                break;
    
            case "Third":
                setBtnEstilo(`${className ?? ''} ${ tamanhoAutomatico ? 'btn-auto' : '' } ${prefix}-third`);
                break;
    
            case "Menu":
                setBtnEstilo(`${className ?? ''} ${ tamanhoAutomatico ? 'btn-auto' : '' } ${prefix}-menu`);
                break;
            
            case "Danger":
                setBtnEstilo(`${className ?? ''} ${ tamanhoAutomatico ? 'btn-auto' : '' } ${prefix}-perigo`);
                break;

            case "Icone":
                setBtnEstilo(`${prefix}-icon`);
                break;
        }
    }

    if(btnIconeMargin === '') {
        switch(tamanho) {
            case "Large":
                setBtnIconeMargin('btn-icone-margin-large');
                break;
            
            case "Medium":
                setBtnIconeMargin('btn-icone-margin-medium');
                break;
            
            case "Normal":
                setBtnIconeMargin('btn-icone-margin-normal');
                break;
    
            case "Small":
                setBtnIconeMargin('btn-icone-margin-small');
                break;
    
            case "ExtraSmall":
                setBtnIconeMargin('btn-icone-margin-extraSmall');
                break;
        }
    }

    if(somenteIcone) {
        console.log(btnEstilo);
        return (
            <button style={ style } className={`${prefix} ${btnEstilo} ${btnTamanho} ${className ?? ''}`} onClick={ onClick } disabled={ disabled }>
                <div className="d-flex justify-content-center align-items-center">{icone}</div>
            </button>
        );
    }

    if(iconePosicao !== undefined) {
        return (
            <button style={ style } className={`${prefix} ${btnEstilo} ${btnTamanho}`} onClick={ onClick } disabled={ disabled }>
                {
                    iconePosicao === "esquerda" ? <div className={`${btnIconeMargin}-right d-flex justify-content-center align-items-center`}>{icone}</div> ?? '' : ''
                }
                <span>{ label }</span>
                {
                    iconePosicao === "direita" ? <div className={`${btnIconeMargin}-left d-flex justify-content-center align-items-center`}>{icone}</div> ?? '' : ''
                }
            </button>
        );
    }

    if(estilo === 'Menu') {
        return (
            <button style={ style } className={`${prefix} ${btnEstilo} ${btnTamanho}`} onClick={ onClick } disabled={ disabled }>
                { icone ? <div className={`${btnIconeMargin}-right d-flex justify-content-center align-items-center`}>{icone}</div> : '' }
                <span>{ label }</span>
                { subitens ? <ChevronDown size={16} style={{ marginLeft: 'auto' }} /> : '' }
            </button>
        );
    }

    return (
        <button style={ style } className={`${prefix} ${btnEstilo} ${btnTamanho}`} onClick={ onClick } disabled={ disabled }>
           { icone ? <div className={`${btnIconeMargin}-right d-flex justify-content-center align-items-center`}>{icone}</div> : '' }
           <span>{ label }</span>
           { notificacoes ? <span className="notificacoes">{ notificacoes }</span> : '' }
        </button>
    );
}
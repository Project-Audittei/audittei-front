import { useState } from "react";

interface BotaoPropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    estilo: 'Primary' | 'Secondary' | 'Third' | 'Menu' | 'Icone';
    tamanho: "Large" | "Normal" | "Medium" | "Small" | "ExtraSmall";
    onClick?: () => void;
    icone?: JSX.Element;
    iconePosicao?: "esquerda" | "direita";
    somenteIcone?: boolean;
}

export default function Botao(props: BotaoPropsType) {
    const { label, tamanho, icone, iconePosicao, estilo, onClick, className, style, disabled, somenteIcone } = props;

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
                setBtnEstilo(`${className} ${prefix}-primary`);
                break;
    
            case "Secondary":
                setBtnEstilo(`${className} ${prefix}-secondary`);
                break;
    
            case "Third":
                setBtnEstilo(`${className} ${prefix}-third`);
                break;
    
            case "Menu":
                setBtnEstilo(`${className} ${prefix}-menu`);
                break;

            case "Icone":
                setBtnEstilo(`${className} ${prefix}-icon`);
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
        return (
            <button style={ style } className={`${prefix} ${btnEstilo} ${btnTamanho}`} onClick={ onClick } disabled={ disabled }>
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
    return (
        <button style={ style } className={`${prefix} ${btnEstilo} ${btnTamanho}`} onClick={ onClick } disabled={ disabled }>
           { icone ? <div className={`${btnIconeMargin}-right d-flex justify-content-center align-items-center`}>{icone}</div> : '' }
           <span>{ label }</span>
        </button>
    );
}
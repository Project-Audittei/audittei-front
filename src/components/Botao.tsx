import { useState } from "react";

interface BotaoPropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    estilo: 'Primary' | 'Secondary' | 'Third' | 'Menu';
    tamanho: "Large" | "Normal" | "Medium" | "Small" | "ExtraSmall";
    onClick?: () => void;
    icone?: JSX.Element;
    iconePosicao?: "esquerda" | "direita";
}

export default function Botao(props: BotaoPropsType) {
    const { label, tamanho, icone, iconePosicao, estilo, onClick, className, style, disabled } = props;

    const [btnEstilo, setBtnEstilo] = useState<string>('');
    const [btnTamanho, setBtnTamanho] = useState<string>('');

    if(btnTamanho === '') {
        switch(tamanho) {
            case "Large":
                setBtnTamanho('btn-large');
                break;
            
            case "Medium":
                setBtnTamanho('btn-medium');
                break;
            
            case "Normal":
                setBtnTamanho('btn-normal');
                break;
    
            case "Small":
                setBtnTamanho('btn-small');
                break;
    
            case "ExtraSmall":
                setBtnTamanho('btn-extraSmall');
                break;
        }
    }

    if(btnEstilo === '') {
        switch(estilo) {
            case "Primary":
                setBtnEstilo(`${className} btn-primary`);
                break;
    
            case "Secondary":
                setBtnEstilo(`${className} btn-secondary`);
                break;
    
            case "Third":
                setBtnEstilo(`${className} btn-third`);
                break;
    
            case "Menu":
                setBtnEstilo(`${className} btn-menu`);
                break;
        }
    }

    if(iconePosicao !== undefined) {
        return (
            <button style={ style } className={`btn ${btnEstilo} ${btnTamanho}`} onClick={ onClick } disabled={ disabled }>
                {
                    iconePosicao === "esquerda" ? <div className="mr-1 d-flex justify-content-center align-items-center">{icone}</div> ?? '' : ''
                }
                <span>{ label }</span>
                {
                    iconePosicao === "direita" ? <div className="ml-1 d-flex justify-content-center align-items-center">{icone}</div> ?? '' : ''
                }
            </button>
        );
    }
    return (
        <button style={ style } className={`btn ${btnEstilo} ${btnTamanho}`} onClick={ onClick } disabled={ disabled }>
           { icone ? <div className="mr-1 d-flex justify-content-center align-items-center">{icone}</div> : '' }
           <span>{ label }</span>
        </button>
    );
}
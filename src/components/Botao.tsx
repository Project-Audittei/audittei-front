import { useEffect, useState } from "react";

type BotaoPropsType = {
    label: string;
    estilo: 'Primary' | 'Secondary' | 'Third' | 'Menu';
    tamanho: "Large" | "Normal" | "Medium" | "Small" | "ExtraSmall";
    onClick: () => void;
    icone?: JSX.Element;
    iconePosicao?: "esquerda" | "direita";
}

export default function Botao({ label, tamanho, icone, iconePosicao, estilo, onClick }: BotaoPropsType) {

    const [btnEstilo, setBtnEstilo] = useState<string>('');
    const [btnTamanho, setBtnTamanho] = useState<string>('');

    useEffect(() => {
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
    }, [tamanho]);

    useEffect(() => {
        switch(estilo) {
            case "Primary":
                setBtnEstilo('btn-primary');
                break;

            case "Secondary":
                setBtnEstilo('btn-secondary');
                break;

            case "Third":
                setBtnEstilo('btn-third');
                break;
        }
    }, [estilo]);

    if(iconePosicao !== undefined) {
        return (
            <button className={`btn ${btnEstilo} ${btnTamanho}`} onClick={ onClick }>
                {
                    iconePosicao === "esquerda" ? icone ?? '' : ''
                }
                <span>{ label }</span>
                {
                    iconePosicao === "direita" ? icone ?? '' : ''
                }
            </button>
        );
    }
    return (
        <button className={`btn ${btnEstilo} ${btnTamanho}`} onClick={ onClick }>
           { icone ?? '' }
           <span>{ label }</span>
        </button>
    );
}
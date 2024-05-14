import { ChevronLeft } from "lucide-react";
import Botao from "../../Botao";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";

type HeaderPropsType = {
    titulo?: string;
    nivel: number;
    children: ReactNode;
}

export default function Header({ titulo, nivel, children }: HeaderPropsType) {
    
    const navigate = useNavigate();

    return (
        <header className="bg-primary">
            <div className="container">
                <Botao
                    icone={ <ChevronLeft size={16}/> }
                    label="Voltar"
                    estilo="Secondary"
                    onClick={() => {
                        navigate(-1);
                    }}
                    tamanho="ExtraSmall"
                    iconePosicao="esquerda"
                />
                { titulo !== undefined ? <h3>{ titulo }</h3> : '' }
            </div>
        </header>
    );
}
import { ReactNode } from "react";
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from "lucide-react";
import Botao from "./Botoes/Botao";
import Modal from "./Modal/Modal";

type VisaoBasicaPropsType = {
    titulo?: string;
    nivel: number;
    children: ReactNode;
}

export default function VisaoBasica({ titulo, nivel, children }: VisaoBasicaPropsType) {

    const navigate = useNavigate();

    if(nivel > 0) {
        return (
            <>
                <Modal />
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
                <div className="container">
                    { children }
                </div>
            </>
        );
    }

    return (
        <div className="container">
            { children }
        </div>
    );
}
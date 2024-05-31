import { ArrowRight } from "lucide-react";
import Botao from "../Botoes/Botao";

interface CardOnBoardingProps {
    numero: number;
    imagem: string;
    texto: JSX.Element;
    btnLabel: string;
}

export default function CardOnBoarding({ numero, imagem, texto, btnLabel }: CardOnBoardingProps) {
    return (
        <div className="card card-onboarding">
            <div className="card-background">
                <img src={`${process.env.PUBLIC_URL}/assets/images/${ imagem }.svg`} alt="" />
            </div>
            <div className="card-body">
                <span className="numero">{ numero }</span>
                <div>
                    <span>{ texto }</span>
                    <Botao
                        estilo="Primary"
                        tamanho="ExtraSmall"
                        label={ btnLabel }
                        icone={<ArrowRight size={16}/>}
                        iconePosicao="direita"
                    />
                </div>
            </div>
        </div>
    );
}
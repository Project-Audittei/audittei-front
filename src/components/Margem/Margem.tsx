import { useEffect, useState } from "react";
import Botao, { BotaoTamanho } from "../Botoes/Botao";
import { Plus } from "lucide-react";

export interface IMargemProps {
    tipo: 'celular' | 'tablet' | 'desktop';
}

export default function Margem({ tipo }: IMargemProps) {

    const [larguraDispositivo, setLarguraDispositivo] = useState<number>(0);
    const [classDispositivo, setClassDispositivo] = useState<string>('');
    const [btnTamanho, setBotaoTamanho] = useState<BotaoTamanho>('Normal');

    useEffect(() => {
        switch (tipo) {
            case 'celular':
                setLarguraDispositivo(320);
                setClassDispositivo('celular');
                setBotaoTamanho('Medium');
                break;

            case "tablet":
                setLarguraDispositivo(640);
                setClassDispositivo('tablet');
                setBotaoTamanho('Normal');
                break;

            case 'desktop':
                setLarguraDispositivo(1560);
                setClassDispositivo('desktop');
                setBotaoTamanho('Normal');
                break;
        }
    }, [
        tipo
    ]);

    return (
        <div className={`margem-demo ${ classDispositivo }`} style={{ width: larguraDispositivo, backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="m-header"></div>
                <section className="m-header">
                    <h1 className="m-thin">Lorem ipsum dolor sit amet, consectetur</h1>
                    <p className="m-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</p>
                    <Botao
                        estilo="Primary"
                        tamanho={ btnTamanho }
                        label="Label"
                    />
                </section>
                <section className="m-header">
                    <h1 className="m-thin">Lorem ipsum dolor sit amet, consectetur</h1>
                    <p className="m-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</p>
                    <div className="row">
                        <Botao
                            estilo="Primary"
                            tamanho={ btnTamanho }
                            label="Label"
                        />
                        <Botao
                            estilo="Secondary"
                            tamanho={ btnTamanho }
                            label="Label"
                            icone={<Plus size={16}/>}
                            iconePosicao="esquerda"
                        />
                    </div>
                </section>
                <section className="m-header">
                    <h1 className="m-thin">Lorem ipsum dolor sit amet, consectetur</h1>
                    <p className="m-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</p>
                    <br />
                    <p className="m-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</p>
                    <div className="image-placeholder"></div>
                </section>
                <section className="m-header">
                    <h1 className="m-thin">Lorem ipsum dolor sit amet, consectetur</h1>
                    <p className="m-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</p>
                </section>
                <section className="m-header">
                    <h1 className="m-thin">Lorem ipsum dolor sit amet, consectetur</h1>
                    <p className="m-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</p>
                </section>
            </div>
        </div>
    );
}
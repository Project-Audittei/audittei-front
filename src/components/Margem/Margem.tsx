import { useEffect, useState } from "react";
import Botao from "../Botoes/Botao";
import { Plus } from "lucide-react";

export interface IMargemProps {
    tipo: 'celular' | 'tablet' | 'desktop';
}

export default function Margem({ tipo }: IMargemProps) {

    const [larguraDispositivo, setLarguraDispositivo] = useState<number>(0);
    const [classDispositivo, setClassDispositivo] = useState<string>('');

    useEffect(() => {
        switch (tipo) {
            case 'celular':
                setLarguraDispositivo(320);
                setClassDispositivo('celular');
                break;

            case "tablet":
                setLarguraDispositivo(640);
                setClassDispositivo('tablet');
                break;

            case 'desktop':
                setLarguraDispositivo(1560);
                setClassDispositivo('desktop');
                break;
        }
    }, [
        larguraDispositivo,
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
                        tamanho="Medium"
                        label="Label"
                    />
                </section>
                <section className="m-header">
                    <h1 className="m-thin">Lorem ipsum dolor sit amet, consectetur</h1>
                    <p className="m-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</p>
                    <Botao
                        estilo="Primary"
                        tamanho="Medium"
                        label="Label"
                        className="m-thin"
                    />
                    <Botao
                        estilo="Secondary"
                        tamanho="Medium"
                        label="Label"
                        icone={<Plus size={16}/>}
                        iconePosicao="esquerda"
                    />
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
import { Home } from "lucide-react";
import Botao from "../../components/Botoes/Botao";

export default function GridContent() {
    return (
        <>
            <h1>Grid</h1>
            <div className="row" style={{ height: '100%' }}>
                <div className="col">
                    <Botao estilo="Primary" tamanho="Normal" label="Botão" icone={ <Home /> } iconePosicao="direita" />
                </div>
            </div>
        </>
    );
}
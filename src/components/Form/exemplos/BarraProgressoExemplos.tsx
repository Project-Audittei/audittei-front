import { useState } from "react";
import BarraProgresso from "../BarraProgresso";
import RodaProgresso from "../RodaProgresso";

export default function BarraProgressoExemplos() {

    const [progresso, setProgresso] = useState<number>(25);

    return (
        <>
            <div className="row mb-4">
                <h5>Barra de Progresso</h5>
            </div>
            <div className="row mb-4">
                <div className="col-2">Ajuste o progresso</div>
                <div className="col-2">
                    <input type="range" min={0} max={100} value={progresso} onChange={(e) => setProgresso(parseInt(e.currentTarget.value))} />
                </div>
            </div>
            <div className="row mb-4">
                <BarraProgresso progresso={progresso} />
            </div>
            <div className="row ">
                <RodaProgresso progresso={progresso} />
                <RodaProgresso tamanho="pequeno" progresso={progresso} />
            </div>
        </>
    );
}
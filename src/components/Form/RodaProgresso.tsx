import { useState, useEffect } from "react";

type RodaProgressoTamanho = 'grande' | 'pequeno';

interface RodaProgressoPropsType {
    tamanho?: RodaProgressoTamanho;
    progresso: number;
}

export default function RodaProgresso({ progresso, tamanho = 'grande' }: RodaProgressoPropsType) {

    const [offset, setOffset] = useState(0);

    const tamanhoRoda = tamanho === 'grande' ? 50 : 30;

    useEffect(() => {
        const progressOffset = ((100 - progresso) / 100) * (2 * Math.PI * (tamanhoRoda / 2 - 5));
        setOffset(progressOffset);
    }, [progresso, tamanhoRoda]);

    return (
        <div className={`roda-progresso ${ tamanho === 'grande' ? 'grande' : 'pequeno' }`}>
            <div className="progresso">{ progresso }%</div>
            <svg className="circular-loader-svg" width={tamanhoRoda} height={tamanhoRoda}>
                <circle
                    className="circular-loader-bg"
                    cx={tamanhoRoda / 2}
                    cy={tamanhoRoda / 2}
                    r={tamanhoRoda / 2 - 5}
                    strokeWidth="3"
                />
                <circle
                    className="circular-loader-progress"
                    cx={tamanhoRoda / 2}
                    cy={tamanhoRoda / 2}
                    r={tamanhoRoda / 2 - 5}
                    strokeLinecap="round"
                    strokeWidth="3"
                    strokeDasharray={`${2 * Math.PI * (tamanhoRoda / 2 - 5)}`}
                    strokeDashoffset={offset}
                    style={{ transition: `stroke-dashoffset .3s linear` }}
                />
            </svg>
        </div>
    );
}
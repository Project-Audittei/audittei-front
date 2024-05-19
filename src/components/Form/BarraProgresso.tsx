interface BarraProgressoPropsType {
    progresso: number;
}

export default function BarraProgresso({ progresso }: BarraProgressoPropsType) {
    return (
        <div className="barra-progresso">
            <div className="total"></div>
            <div className="progresso" style={{ width: `${progresso}%` }}>
                <div className="descricao">{progresso}%</div>
            </div>
        </div>
    );
}
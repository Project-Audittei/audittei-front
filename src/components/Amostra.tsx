type AmostraPropsType = {
    cor: string;
    valor: string;
    descricao?: string;
    bordado?: boolean;
    tipo: 'fundo' | 'borda';
}

export default function Amostra({ cor, valor, descricao, bordado, tipo }: AmostraPropsType) {
    switch(tipo) {
        case "fundo":
            return (
                <div className="amostra">
                    {
                        bordado ? 
                        ( <div className="demo demo-borded" style={{ backgroundColor:  cor }}></div> ) :
                        <div className="demo" style={{ backgroundColor:  cor }}></div>
                    }
                    <div className="titulo">{ valor }</div>
                    { <div className="descricao">{ descricao }</div> ?? '' }
                </div>
            );
        
        case "borda":
            return (
                <div className="amostra">
                    <div className="demo demo-borded" style={{ borderColor:  cor }}></div>
                    <div className="titulo">{ valor }</div>
                    { <div className="descricao">{ descricao }</div> ?? '' }
                </div>
            );
    }

    return (
        <div className="amostra">
            {
                bordado ? 
                ( <div className="demo demo-borded" style={{ backgroundColor:  cor }}></div> ) :
                <div className="demo" style={{ backgroundColor:  cor }}></div>
            }
            <div className="titulo">{ valor }</div>
            { <div className="descricao">{ descricao }</div> ?? '' }
        </div>
    );
}
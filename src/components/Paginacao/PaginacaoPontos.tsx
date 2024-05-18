import { useState, useEffect } from "react";
import { IPaginacaoPontos } from "../../@types/Paginacao";


export default function PaginacaoPontos({
    atual,
    quantidade,
    onSelecionarNumeroPagina
}: IPaginacaoPontos) {
    const [itens, setItens] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const elementosPaginacao = [];

        for(let index = 1; index <= quantidade; index++) {
            if (atual === index) {
                elementosPaginacao.push(<li className={`pagina-item ativo`}></li>);
            } else {
                elementosPaginacao.push(<li className={`pagina-item`} onClick={() => onSelecionarNumeroPagina(index)}></li>);
            }
        }

        setItens(elementosPaginacao);
    }, [
        atual, 
        quantidade, 
        onSelecionarNumeroPagina
    ]);

    return (
        <div className="paginacao-pontos">
            <ul className="paginas">
                { itens }
            </ul>
        </div>
    );
}
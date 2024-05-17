import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export interface IPaginacao {
    atual: number;
    quantidade: number;
}

export default function Paginacao({ atual, quantidade }: IPaginacao) {
    const [itens] = useState<JSX.Element[]>([]);
    const quantidadeMinimaEmTela = 3;
    
    if(atual > quantidadeMinimaEmTela) {
        itens.push(<li className={`pagina-item mais`}>1</li>);
        itens.push(<li className={`pagina-item mais`}>...</li>);
    }
    
    if (atual < quantidade) {
        for (let index = atual - 1; index <= atual + 1; index++) {
            console.log('executando...');
            if(quantidade > 5 && index > atual + 2) {
                itens.push(<li key={ index } className={`pagina-item mais`}>...</li>);
                itens.push(<li key={ index } className={`pagina-item`}>{ quantidade }</li>);
                break;
            }
            itens.push(<li key={ index } className={`pagina-item ${ index === atual ? 'ativo' : '' }`}>{ index }</li>);
        }
    }

    if ( atual + 3 > quantidadeMinimaEmTela) {
        itens.push(<li className={`pagina-item mais`}>...</li>);
        itens.push(<li className={`pagina-item mais`}>{ quantidade }</li>);
    }

    return (
        <div className="paginacao">
            <ul className="paginas">
                <li className="pagina-item">
                    <div className="controle controle-esquerda">
                        <ChevronLeft />
                    </div>
                </li>
                { itens }
                <li className="pagina-item">
                    <div className="controle controle-direita">
                        <ChevronRight />
                    </div>
                </li>
            </ul>
        </div>
    );
}
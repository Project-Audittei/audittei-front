import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { IPaginacaoNumeros } from "../../@types/Paginacao";
import Botao from "../Botoes/Botao";

export default function Paginacao({ 
    atual, 
    quantidade,
    onAvancarPagina,
    onRetrocederPagina,
    onSelecionarNumeroPagina,
    quantidadeMinimaEmTela = 3
}: IPaginacaoNumeros) {
    const [itens, setItens] = useState<JSX.Element[]>([]);
    
    useEffect(() => {
        const elementosPaginacao = [];

        if (atual <= quantidadeMinimaEmTela) {
            if(quantidade < quantidadeMinimaEmTela) {
                for(let index = 1; index <= quantidade; index++) {
                    if (atual === index) {
                        elementosPaginacao.push(<li className={`pagina-item ativo`}>{ index }</li>);
                    } else {
                        elementosPaginacao.push(<li className={`pagina-item`} onClick={() => onSelecionarNumeroPagina(index)}>{ index }</li>);
                    }
                }
            } else {
                for(let index = 1; index <= quantidadeMinimaEmTela; index++) {
                    if (atual === index) {
                        elementosPaginacao.push(<li className={`pagina-item ativo`}>{ index }</li>);
                    } else {
                        elementosPaginacao.push(<li className={`pagina-item`} onClick={() => onSelecionarNumeroPagina(index)}>{ index }</li>);
                    }
                }
            }


            if(quantidade > quantidadeMinimaEmTela) {
                
                if(quantidade - 1 > quantidadeMinimaEmTela) elementosPaginacao.push(<li className={`pagina-item mais`}>...</li>);

                elementosPaginacao.push(<li className={`pagina-item`} onClick={() => onSelecionarNumeroPagina(quantidade)}>{ quantidade }</li>);
            }
            setItens(elementosPaginacao);
            return;
        }
        
        if (atual > quantidadeMinimaEmTela && atual < quantidade - quantidadeMinimaEmTela) {
            elementosPaginacao.push(<li className={`pagina-item`} onClick={() => onSelecionarNumeroPagina(1)}>1</li>);
            elementosPaginacao.push(<li className={`pagina-item mais`}>...</li>);

            elementosPaginacao.push(<li className={`pagina-item `} onClick={() => onSelecionarNumeroPagina(atual - 1)}>{ atual - 1 }</li>);
            elementosPaginacao.push(<li className={`pagina-item ativo`}>{ atual }</li>);
            elementosPaginacao.push(<li className={`pagina-item `} onClick={() => onSelecionarNumeroPagina(atual + 1)}>{ atual + 1 }</li>);

            elementosPaginacao.push(<li className={`pagina-item mais`}>...</li>);
            elementosPaginacao.push(<li className={`pagina-item`} onClick={() => onSelecionarNumeroPagina(atual + 1)}>{ quantidade }</li>);

            setItens(elementosPaginacao);
            return;
        }
        
        if (atual <= quantidade) {
            console.log('caiu aqui');
            elementosPaginacao.push(<li className={`pagina-item`} onClick={() => onSelecionarNumeroPagina(1)}>1</li>);
            elementosPaginacao.push(<li className={`pagina-item mais`}>...</li>);

            if(atual <= quantidade - quantidadeMinimaEmTela) {
                for(let index = atual; index < quantidade; index++) {
                    if (atual === index) {
                        elementosPaginacao.push(<li className={`pagina-item ativo`}>{ index }</li>);
                    } else {
                        elementosPaginacao.push(<li className={`pagina-item`} onClick={() => onSelecionarNumeroPagina(index)}>{ index }</li>);
                    }
                }
            } else {
                for(let index = quantidade - quantidadeMinimaEmTela + 1; index <= quantidade; index++) {
                    if (atual === index) {
                        elementosPaginacao.push(<li className={`pagina-item ativo`}>{ index }</li>);
                    } else {
                        elementosPaginacao.push(<li className={`pagina-item`} onClick={() => onSelecionarNumeroPagina(index)}>{ index }</li>);
                    }
                }
            }

            setItens(elementosPaginacao);
            return;
        }
    }, [
        atual,
        quantidade,
        quantidadeMinimaEmTela,
        onSelecionarNumeroPagina
    ]);

    return (
        <div className="paginacao">
            <ul className="paginas">
                <li className="pagina-item">
                    <div className="controle controle-esquerda" onClick={onRetrocederPagina}>
                        <Botao
                            estilo="Icone"
                            tamanho="Small"
                            icone={ <ChevronLeft /> }
                            somenteIcone
                        />
                    </div>
                </li>
                { itens }
                <li className="pagina-item">
                    <div className="controle controle-direita" onClick={onAvancarPagina}>
                        <Botao
                            estilo="Icone"
                            tamanho="Small"
                            icone={ <ChevronRight /> }
                            somenteIcone
                        />
                    </div>
                </li>
            </ul>
        </div>
    );
}
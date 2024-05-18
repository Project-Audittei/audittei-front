import { useState } from "react";
import Paginacao from "../../components/Paginacao/Paginacao";
import PaginacaoPontos from "../../components/Paginacao/PaginacaoPontos";

export default function PaginacaoContent() {
    const [paginacaoPaginasAtual, setPaginacaoPaginasAtual] = useState(1);
    const [paginacaoPontosAtual, setPaginacaoPontosAtual] = useState(1);
    const [quantidadePaginacaoPaginas] = useState(10);
    const [quantidadePaginacaoPontos] = useState(5);

    const HandleAvancarPaginacaoPaginas = () => {
        if(paginacaoPaginasAtual === quantidadePaginacaoPaginas) return;
        
        setPaginacaoPaginasAtual(paginacaoPaginasAtual + 1);
    }

    const HandleRetrocederPaginacaoPaginas = () => {
        if(paginacaoPaginasAtual === 1) return;
        
        setPaginacaoPaginasAtual(paginacaoPaginasAtual - 1);
    }

    const HandleSelecionarPaginacaoPaginas = (valor: number) => {        
        setPaginacaoPaginasAtual(valor);
    }
    
    const HandleSelecionarPaginacaoPontos = (valor: number) => {        
        setPaginacaoPontosAtual(valor);
    }

    return (
        <>
            <h1 className="titulo-pagina mb-4">11. Paginação</h1>

            <div className="row"><div className="subtitulo">NAVEGAÇÃO POR PONTOS</div></div>
            <div className="row mb-4">
                <div className="col-4">
                    <PaginacaoPontos
                        atual={ paginacaoPontosAtual } 
                        quantidade={ quantidadePaginacaoPontos }
                        onSelecionarNumeroPagina={ HandleSelecionarPaginacaoPontos }
                    />
                </div>
            </div>

            <div className="row"><div className="subtitulo">PAGINAÇÃO</div></div>
            <div className="row">
                <div className="col-4">
                    <Paginacao 
                        atual={ paginacaoPaginasAtual } 
                        quantidade={ quantidadePaginacaoPaginas }
                        onSelecionarNumeroPagina={ HandleSelecionarPaginacaoPaginas }
                        onRetrocederPagina={ HandleRetrocederPaginacaoPaginas }
                        onAvancarPagina={ HandleAvancarPaginacaoPaginas }
                    />
                </div>
            </div>
            
        </>
    );
}
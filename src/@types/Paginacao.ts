export interface IPaginacao {
    atual: number;
    quantidade: number;
    onSelecionarNumeroPagina: (valor: number) => void;
}

export interface IPaginacaoNumeros extends IPaginacao {
    onAvancarPagina: () => void;
    onRetrocederPagina: () => void;
    quantidadeMinimaEmTela?: number;
}

export interface IPaginacaoPontos extends IPaginacao {};
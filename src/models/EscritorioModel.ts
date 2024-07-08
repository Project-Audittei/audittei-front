export interface EscritorioModel {
    guid?: string;
    cnpj: string;
    razaoSocial: string;
    email: string;
    telefone: string;
    cep: string;
    logradouro: string;
    bairro: string;
    cidade: string;
    numero: string;
    complemento?: string;
    uf: string;
}

export interface EscritorioModelDTO {
    cnpj: string;
    razaoSocial: string;
    email: string;
    telefone: string;
    cep: string;
    logradouro: string;
    bairro: string;
    cidade: string;
    numero: string;
    complemento?: string;
    uf: string;
}

export interface IEscritorioRequest {
    cnpj: string;
    razaoSocial: string;
    telefone: string;
    email: string;
    cep: string;
    logadouro: string;
    bairro: string;
    cidade: string;
    estado: string;
}
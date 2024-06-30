import { EntidadeBasicaModel } from "./EntidadeBasicaModel";

export interface EscritorioModel extends EntidadeBasicaModel {
    cadastro?: string;
    cnpj: string;
    razao_social: string;
    nome: string;
    responsavel: string;
    email: string;
    telefone: string;

    cep: string;
    logradouro: string;
    bairro: string;
    cidade: string;
    numero: string;
    complemento: string;
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
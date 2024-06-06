import { EntidadeBasicaModel } from "./EntidadeBasicaModel";

export interface EmpresaModel extends EntidadeBasicaModel {
    cadastro?: string;
    cnpj: number;
    razao_social: string;
    nome_fantasia: string;
    responsavel: string;
    email: string;

    regimeTributario: string;
    cnae: number;
    industria: string;

    cep: string;
    logradouro: string;
    bairro: string;
    municipio: string;
    numero: string;
    complemento: string;
    uf: string;
}
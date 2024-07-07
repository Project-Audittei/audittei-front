import { EntidadeBasicaModel } from "./EntidadeBasicaModel";
import { UsuarioModel } from "./UsuarioModel";

export interface EmpresaModel extends EntidadeBasicaModel {
    cadastro?: string;
    cnpj: string;
    razaoSocial: string;
    nomeFantasia: string;
    responsavelLegal: string;
    telefone: string;
    email: string;

    regimeTributario: string;
    cnae: number;
    industria: string;

    cep: string;
    logradouro: string;
    bairro: string;
    cidade: string;
    numero: string;
    complemento: string;
    uf: string;

    created_at?: Date;

    usuarios: UsuarioModel[];
}

export interface IEmpresaCadastro {
    guid?: string;
    cnpj: string;
    nomeFantasia: string;
    responsavelLegal: string;
    email: string;
    telefone: string;
    razaoSocial: string;
    cep: string;
    logradouro: string;
    bairro: string;
    cidade: string;
    numero: string;
    complemento: string;
    uf: string;
}

export interface IEmpresaAtualizar {
    guid: string;
    nomeFantasia: string;
    responsavelLegal: string;
    email: string;
    telefone: string;
    complemento: string;
}

export interface IPerfilEmpresaRequest {
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
import { EntidadeBasicaModel } from "./EntidadeBasicaModel";
import { EscritorioModel } from "./EscritorioModel";

export interface NovoUsuarioModel {
    nomeCompleto: string;
    email: string;
    telefone: string;
    senha: string;
}

export interface UsuarioModel extends EntidadeBasicaModel {
    email: string;
    telefone: string;
    nomeCompleto: string;
    nomeEmpresa: string;
    status: boolean;
    passwordExpire: Date;
    createAt: Date;
    userRole: string;
    username: string;
    password: string;
    escritorio: EscritorioModel;
    
    iniciais: string;
    access_token: string;
    expires_in: number;
    nomeSimples: string;
}

export interface UsuarioLoginModel {
    email: string;
    senha: string;
}
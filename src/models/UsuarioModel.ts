export interface NovoUsuarioModel {
    nomeCompleto: string;
    email: string;
    telefone: string;
    nomeEmpresa: string;
    senha: string;
}

export interface UsuarioModel {
    userId: number;
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
}

export interface UsuarioLoginModel {
    email: string;
    senha: string;
}
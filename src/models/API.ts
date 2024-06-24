import { NotificacaoTipoType } from "../components/Notificacao/Notificacao";
import { UsuarioModel } from "./UsuarioModel";

export interface APIRequest<T> {
    url: string;
    dataRequest?: T;
    method?: 'get' | 'post';
    authToken?: string;
}

export interface APIResponse<T> {
    statusCode: number;
    data: T | null;
    message: string;
    success: boolean;
}

/**
 * @deprecated Usar APIRequestResponse ao invés desta
 */
export interface APIResponseErro {
    titulo: string;
    tipo: NotificacaoTipoType;
    mensagem: string;
}

export interface APIRequestResponse {
    titulo: string;
    tipo: NotificacaoTipoType;
    mensagem: string;
}

export interface APILoginResponse {
    usuario: UsuarioModel;
    token: string;
}
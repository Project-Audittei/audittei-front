import { NotificacaoTipoType } from "../components/Notificacao/Notificacao";

export interface APIRequest<T> {
    url: string;
    dataRequest: T;
    method?: 'get' | 'post';
}

export interface APIResponse<T> {
    statusCode: number;
    data: T | null;
    message: string;
    success: boolean;
}

export interface APIResponseErro {
    titulo: string;
    tipo: NotificacaoTipoType;
    mensagem: string;
}
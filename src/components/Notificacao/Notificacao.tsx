import { CircleCheckBig, Info, TriangleAlert, X } from "lucide-react";
import { useEffect, useState } from "react";

type NotificacaoTipoType = 'informacao' | 'erro' | 'valido';
type NotificacaoTamanhoType = 'grande' | 'pequeno';

export interface INotificacao {
    tipo: NotificacaoTipoType;
    tamanho: NotificacaoTamanhoType;
    mensagem: string | JSX.Element;
    tituloNotificacao?: string;
}

export default function Notificacao({ tituloNotificacao = "Notificação", tipo = 'informacao', mensagem, tamanho = 'grande' }: INotificacao) {
    const [icone, setIcone] = useState<JSX.Element>(<></>);
    const [visivel, setVisivel] = useState<boolean>(true);
    const [titulo, setTitulo] = useState<string>(tituloNotificacao ?? '');
    const [classNotificacao, setClassNotificacao] = useState<string>('');

    useEffect(() => {
        switch (tipo) {
            case "informacao":
                setIcone(<Info size={16} />);
                setTitulo(tituloNotificacao);
                setClassNotificacao('notificacao-informacao');
                break;

            case "erro":
                setIcone(<TriangleAlert size={16} />);
                setTitulo(tituloNotificacao);
                setClassNotificacao('notificacao-erro');
                break;

            case "valido":
                setIcone(<CircleCheckBig size={16} />);
                setTitulo(tituloNotificacao);
                setClassNotificacao('notificacao-valido');
                break;
        }
    }, [tipo, tituloNotificacao]);

    const HandleFecharNotificacao = () => {
        setVisivel(false);
    }

    if (!visivel) return null;

    switch (tamanho) {
        case "grande":
            return (
                <div className={`notificacao ${classNotificacao}`}>
                    <div className="notificacao-header">
                        <div className="icone">
                            {icone}
                        </div>
                        <span>{titulo}</span>
                    </div>
                    <div className="notificacao-content">
                        {mensagem}
                    </div>
                    <div className="notificacao-fechar">
                        <X size={20} onClick={HandleFecharNotificacao} />
                    </div>
                </div>
            );

        case "pequeno":
            return (
                <div className={`notificacao ${classNotificacao}`}>
                    <div className="notificacao-content">
                        <div className="icone">
                            {icone}
                        </div>
                        <span>{mensagem}</span>
                    </div>
                    <div className="notificacao-fechar">
                        <X size={20} onClick={HandleFecharNotificacao} />
                    </div>
                </div>
            );
    }
}
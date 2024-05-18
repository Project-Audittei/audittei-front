import Notificacao, { INotificacao } from "../../../components/Notificacao/Notificacao";

export default function NotificacoesPequenas() {
    const notificacoesPequeno: INotificacao[] = [
        {
            tipo: "informacao",
            mensagem: "Mensagem da Notificação. Exemplo.",
            tamanho: "pequeno"
        },
        {
            tipo: "erro",
            mensagem: "Mensagem da Notificação. Exemplo.",
            tamanho: "pequeno"
        },
        {
            tipo: "valido",
            mensagem: "Mensagem da Notificação. Exemplo.",
            tamanho: "pequeno"
        }
    ];

    return (
        <>
            { notificacoesPequeno.map((item, index) => (
                <div key={ index } className="row mb-2">
                    <div className="col-5">
                        <Notificacao
                            tipo={ item.tipo } 
                            tamanho={ item.tamanho } 
                            mensagem={ item.mensagem }
                        />
                    </div>
                </div>
            )) }
        </>
    );
}
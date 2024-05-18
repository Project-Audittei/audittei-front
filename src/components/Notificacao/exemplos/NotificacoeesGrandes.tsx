import Notificacao, { INotificacao } from "../Notificacao";

export default function NotificacoesGrandes() {

    const notificacoes: INotificacao[] = [
        {
            tipo: "informacao",
            mensagem: "Mensagem da Notificação. Exemplo.",
            tamanho: "grande"
        },
        {
            tipo: "erro",
            mensagem: "Mensagem da Notificação. Exemplo.",
            tamanho: "grande"
        },
        {
            tipo: "valido",
            mensagem: "Mensagem da Notificação. Exemplo.",
            tamanho: "grande"
        }
    ];

    return (
        <>
            { notificacoes.map((item, index) => (
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
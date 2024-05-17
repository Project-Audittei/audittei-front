import Notificacao, { INotificacao } from "../../components/Notificacao/Notificacao";

export default function NotificacoesContent() {
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
        },
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
            <h1 className="titulo-pagina">10. Notificações</h1>
            { notificacoes.map((item, index) => (
                <div key={ index } className="row mb-2">
                    <Notificacao
                        tipo={ item.tipo } 
                        tamanho={ item.tamanho } 
                        mensagem={ item.mensagem }
                    />
                </div>
            )) }
        </>
    );
}
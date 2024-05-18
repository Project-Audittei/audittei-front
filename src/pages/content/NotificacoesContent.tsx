import NavegacaoInterna, { INavegacaoInternaTab } from "../../components/NavegacaoInterna/NavegacaoInterna";
import NotificacoesGrandes from "../../components/Notificacao/exemplos/NotificacoeesGrandes";
import NotificacoesPequenas from "../../components/Notificacao/exemplos/NotificacoesPequenas";

export default function NotificacoesContent() {
    const tabs: INavegacaoInternaTab[] = [
        { id: 1, titulo: "Grandes", conteudo: <NotificacoesGrandes /> },
        { id: 2, titulo: "Pequenas", conteudo: <NotificacoesPequenas /> }
    ];

    return (
        <>
            <h1 className="titulo-pagina">10. Notificações</h1>
            
            <div className="row mt-3">
                <NavegacaoInterna
                    tabs={tabs}
                    inicial={tabs[0]}
                />
            </div>
        </>
    );
}
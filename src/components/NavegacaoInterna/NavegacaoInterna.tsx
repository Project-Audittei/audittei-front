import { useState } from "react";

export interface INavegacaoInterna {
    tabs: INavegacaoInternaTab[];
    inicial: INavegacaoInternaTab;
}

export interface INavegacaoInternaTab {
    id: number;
    titulo: string;
    conteudo: JSX.Element;
}

export default function NavegacaoInterna({ tabs, inicial }: INavegacaoInterna) {
    const [conteudoAtual, setConteudoAtual] = useState<JSX.Element>(inicial.conteudo);
    const [tabAtual, setTabAtual] = useState<INavegacaoInternaTab>(inicial);

    const HandleTrocarTab = (tab: INavegacaoInternaTab) => {
        setTabAtual(tab);
        setConteudoAtual(tab.conteudo);
    }

    return (
        <div className="navegacao-interna">
            <div className="navegacao-header">
                <ul className="nav-tabs">
                    { tabs.map( tab => {
                        if (tab.id === tabAtual.id) {
                            return ( <li key={tabAtual.id} className={`nav-item ativo`}>{ tabAtual.titulo }</li> );
                        }
                        return ( <li key={tab.id} className={`nav-item`} onClick={() => HandleTrocarTab(tab)}>{ tab.titulo }</li> );
                    }) }
                </ul>
                <div className="separador"></div>
            </div>
            <div className="navegacao-conteudo">
                { conteudoAtual }
            </div>
        </div>
    );
}
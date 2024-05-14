import { ReactNode } from "react";
import Botao from "../../Botao";
import { Home, LayoutGrid, Type } from "lucide-react";

type VisaoBasicaPropsType = {
    titulo?: string;
    nivel: number;
    children: ReactNode;
}

export default function VisaoBasica({ titulo, nivel, children }: VisaoBasicaPropsType) {
    return (
        <div className="app-container">
            <aside>
                <div className="header"><h4>Audittei Docs</h4></div>
                <div className="separador"></div>
                <div className="container">
                    <ul className="menu">
                        <li><Botao estilo="Menu" icone={ <Home size={16}/> } label="Home" tamanho="Small" onClick={() => {}} /></li>
                        <li><Botao estilo="Menu" icone={ <Type size={16}/> } label="Tipografia" tamanho="Small" onClick={() => {}} /></li>
                        <li><Botao estilo="Menu" icone={ <LayoutGrid size={16}/> } label="Grid" tamanho="Small" onClick={() => {}} /></li>
                    </ul>
                </div>
            </aside>
            <div className="app-content">
                <header></header>
                <main>{ children }</main>
            </div>
        </div>
    );
}
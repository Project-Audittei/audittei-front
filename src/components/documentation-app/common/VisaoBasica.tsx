import { ReactNode } from "react";
import MenuSide from "./MenuSide";

type VisaoBasicaPropsType = {
    children: ReactNode;
}

export default function VisaoBasica({ children }: VisaoBasicaPropsType) {
    return (
        <div className="app-container">
            <aside>
                <div className="header"><h4>Audittei Docs</h4></div>
                <div className="separador"></div>
                <div className="container">
                    <MenuSide />
                </div>
            </aside>
            <div className="app-content">
                <header></header>
                <main>{ children }</main>
            </div>
        </div>
    );
}
import { ReactNode } from "react";
import MenuSide from "./MenuSide";
import Modal from "../../Modal/Modal";
import Selecao from "../../Form/Selecao";
import Botao from "../../Botoes/Botao";
import { Bell } from "lucide-react";

type VisaoBasicaPropsType = {
    children: ReactNode;
}

export default function VisaoBasica({ children }: VisaoBasicaPropsType) {
    return (
        <div className="app-container">
            <Modal />
            <aside>
                <div className="header">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="" />
                </div>
                <div className="separador"></div>
                <div className="container">
                    <MenuSide />
                </div>
            </aside>
            <div className="app-content">
                <header className="app-header">
                    <div className="row">
                        <div className="col-2">
                            <span className="selecao-empresa">Selecione uma empresa</span>
                        </div>
                        <div className="col-5">
                            <Selecao
                                opcoes={[
                                    { id: 1, name: "TV Globo" }
                                ]}
                            />
                        </div>
                        <div className="col">
                            <Botao
                                icone={<Bell size={16} />}
                                estilo="Third"
                                tamanho="Medium"
                                label="Quadro de Avisos"
                                className="float-right"
                                notificacoes={5}
                            />
                        </div>
                    </div>
                </header>
                <main id="docs">{ children }</main>
            </div>
        </div>
    );
}
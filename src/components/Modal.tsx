import { X } from "lucide-react";
import Botao from "./Botao";
import useModal from "../hooks/useModal";

export default function Modal() {
    const { isModalOpen, modalClose, modalContent, modalTitle } = useModal();

    if(!isModalOpen) return (<></>);

    const HandleFecharModal = () => {
        modalClose();
    }

    return (
        <div id="modal">
            <div className="backdrop"></div>
            <div className="modal">
                <div className="row">
                    <div className="modal-close">
                        <Botao className="float-right" estilo="Secondary" tamanho="ExtraSmall" icone={<X />} somenteIcone onClick={HandleFecharModal} />
                    </div>
                </div>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1>{ modalTitle }</h1>
                    </div>
                    <div className="modal-body">
                        { modalContent }
                    </div>
                    <div className="modal-footer">
                        <Botao className="float-right" estilo="Primary" tamanho="Large" label="Label"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
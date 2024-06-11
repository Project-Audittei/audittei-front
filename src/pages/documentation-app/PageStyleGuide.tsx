import TipografiaContent from "../content/TipografiaContent";
import BotoesContent from "../content/BotoesContent";
import CoresContent from "../content/CoresContent";
import GridContent from "../content/GridContent";
import MargemContent from "../content/MargemContent";
import IconesContent from "../content/IconesContent";
import CamposDeTextoContent from "../content/CamposDeTextoContent";
import TooltipContent from "../content/TooltipContent";
import NotificacoesContent from "../content/NotificacoesContent";
import PaginacaoContent from "../content/PaginacaoContent";
import NavegacaoInternaContent from "../content/NavegacaoInternaContent";
import ModalContent from "../content/ModalContent";
import Modal from "../../components/Modal/Modal";

export default function PageStyleGuide() {
    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col">
                    <GridContent />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <MargemContent/>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <TipografiaContent/>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <IconesContent/>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <CoresContent/>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <BotoesContent />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <CamposDeTextoContent />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <TooltipContent />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <NotificacoesContent />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <PaginacaoContent />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <NavegacaoInternaContent />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <Modal />
                    <ModalContent />
                </div>
            </div>
        </div>
    );
}
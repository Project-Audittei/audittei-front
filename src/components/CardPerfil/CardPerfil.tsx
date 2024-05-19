import { LogOut } from "lucide-react";
import Botao from "../Botoes/Botao";
import { Link } from "react-router-dom";

export default function CardPerfil() {
    return (
        <div className="card-perfil">
            <div className="card-perfil-container m-thin">
                <div className="row">
                    <div className="col-2">
                        <div className="foto-usuario">RV</div>
                    </div>
                    <div className="col-10">
                        <div className="row">Olá, Rodrigo.</div>
                        <div className="row"><Link to={'/'}>Meu Perfil</Link></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <Botao estilo={"Danger"} iconePosicao="direita" label="Sair" icone={<LogOut size={16} />} tamanho={"Small"} tamanhoAutomatico/>
            </div>
        </div>
    );
}
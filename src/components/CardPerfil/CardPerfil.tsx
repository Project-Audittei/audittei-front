import { LogOut } from "lucide-react";
import Botao from "../Botoes/Botao";
import { Link, useNavigate } from "react-router-dom";
import useUsuario from "../../hooks/useUsuario";

export default function CardPerfil() {

    const { usuario, HandleLogOut } = useUsuario();
    const navigate = useNavigate();

    const HandleSair = () => {
        if(HandleLogOut()) {
            return navigate('/auth/login');
        }
    }

    if(!usuario) return <></>; 

    return (
        <div className="card-perfil">
            <div className="card-perfil-container m-thin">
                <div className="row">
                    <div className="col-2">
                        <div className="foto-usuario">{ usuario.iniciais }</div>
                    </div>
                    <div className="col-10">
                        <div className="row">Olá, { usuario.nomeSimples }.</div>
                        <div className="row"><Link to={'/'}>Meu Perfil</Link></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <Botao className="btn-max" onClick={HandleSair} estilo={"Danger"} iconePosicao="direita" label="Sair" icone={<LogOut size={16} />} tamanho={"Small"} tamanhoAutomatico/>
            </div>
        </div>
    );
}
import { useNavigate } from "react-router-dom";
import { APIConfig } from "../api/APIConfig";
import { consumirAPI } from "../hooks/consumirAPI";
import useUsuario from "../hooks/useUsuario";
import { EscritorioModel, EscritorioModelDTO } from "../models/EscritorioModel";
import { APIRequestResponse } from "../models/API";


export function useEscritorio() {
    const { usuario, AtualizarUsuario } = useUsuario();
    const navigate = useNavigate();
        
    const AtualizarEscritorio = (escritorio: EscritorioModelDTO) => new Promise<void>(async (resolve, reject) => {
        const { success, message } = await consumirAPI<EscritorioModelDTO, EscritorioModel>({
            url: `${APIConfig.editarEscritorio}`,
            method: 'post',
            dataRequest: escritorio,
            authToken: usuario!.access_token
        });


        if(!success) {
            const erro: APIRequestResponse = {
                tipo: "erro",
                mensagem: message,
                titulo: "Erro ao salvar escritório"
            };

            reject(erro);
        }

        let tmp = usuario!;
        tmp.escritorio = escritorio;

        AtualizarUsuario(tmp);
        navigate('/gerenciar-escritorio');

    });

    return {
        AtualizarEscritorio
    };
}
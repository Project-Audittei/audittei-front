import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APIRequestResponse } from "../../../models/API";
import { consumirAPI } from "../../../hooks/consumirAPI";

export default function ConfirmarConta() {
    
    const { hash } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        HandleConfirmarConta(hash);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const HandleConfirmarConta = async (hash?: string) => {

        const { success, message } = await consumirAPI({
            url: "/auth/confirm-register",
            dataRequest: { hash: hash },
            method: "post"
        });

        if(!success) {
            return navigate('/reenviar-confirmar-conta');
        }

        const feedback: APIRequestResponse = {
            tipo: "valido",
            mensagem: message,
            titulo: "Sucesso!"
        }

        navigate('/login', { state: { NotificacaoFeedback: feedback } })
    }
    
    return (<></>);
}
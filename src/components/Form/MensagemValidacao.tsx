import { useEffect, useState } from "react";
import { CircleCheckBig, CircleX, Loader, TriangleAlert } from "lucide-react";
import { EstadosForcaType } from "../../@types/EstadoForca";

interface MensagemValidacaoProps {
    mensagens?: MensagensValidacao;
    tipo: EstadosForcaType;
}

export type MensagensValidacao = { [key in EstadosForcaType]? : string };

export default function MensagemValidacao({ 
    tipo, 
    mensagens = {
        aviso: '',
        carregando: '',
        erro: '',
        padrao: '',
        valido: ''
    }
}: MensagemValidacaoProps) {
    const [icone, setIcone] = useState<JSX.Element>(<></>);
    const tamanhoIcone = 16;

    useEffect(() => {
        switch(tipo) {
            case "aviso":
                setIcone(<TriangleAlert size={tamanhoIcone} color="#FFB82E" />);
                break;
    
            case 'erro':
                setIcone(<CircleX size={tamanhoIcone} color="#F93232"/>);
                break;
    
            case 'carregando':
                setIcone(<Loader size={tamanhoIcone} color="#E8E6F8" />);
                break;
    
            case 'valido':
                setIcone(<CircleCheckBig size={tamanhoIcone} color="#439F6E" />);
                break;
    
            default:
                setIcone(<></>);
                break;
        }
    }, [tipo]);

    if(tipo === 'padrao') return (<></>);

    return (
        <div className="validacao-mensagem">
            { icone }
            <small>{mensagens[tipo]}</small>
        </div>
    );
    
}
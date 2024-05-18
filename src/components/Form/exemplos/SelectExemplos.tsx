import { useState, useEffect } from "react";
import { EstadosForcaType } from "../../../@types/EstadoForca";
import { MensagensValidacao } from "../MensagemValidacao";
import Selecao from "../Selecao";
import SeletorEstado from "../../documentation-app/common/SeletorEstado";

export default function SelectExemplos() {

    const [estado, setEstado] = useState<string>('');
    const [forcaEstado, setForcaEstado] = useState<EstadosForcaType>('padrao');
    const [desabilitado, setDesabilitado] = useState<boolean>(false);

    useEffect(() => {
        setDesabilitado(false);
        switch (parseInt(estado)) {
            case 1:
                setForcaEstado("padrao");
                break;

            case 2:
                setForcaEstado("aviso");
                break;

            case 3:
                setForcaEstado("erro");
                break;

            case 4:
                setForcaEstado("carregando");
                break;

            case 5:
                setForcaEstado("valido");
                break;

            case 6:
                setForcaEstado("desabilitado");
                setDesabilitado(true);
                break;
        }
    }, [estado]);

    const mensagensValidacao: MensagensValidacao = {
        aviso: "Mensagem de Aviso",
        erro: "Mensagem de erro",
        carregando: "Carregando...",
        valido: "Mensagem de sucesso"
    }

    return (
        <>
            <div className="row my-4">
                <SeletorEstado value={estado} onChange={e => setEstado(e.currentTarget.value)} />
            </div>
            <div className="row mb-4">
                <div className="col-2"><h5>Select</h5></div>
                <div className="col-4">
                    <Selecao
                        type="select"
                        placeholder="Texto"
                        opcoes={[
                            { id: 1, name: 'Teste 1' },
                            { id: 2, name: 'Teste 2' },
                            { id: 3, name: 'Teste 3' },
                            { id: 4, name: 'Teste 4' },
                        ]}
                        estado={forcaEstado} 
                        mensagensValidacao={mensagensValidacao}
                        disabled={desabilitado}
                    />
                </div>
            </div>
        </>
    );
}
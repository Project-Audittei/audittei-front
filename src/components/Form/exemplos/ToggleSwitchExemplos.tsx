import { useState, useEffect } from "react";
import { EstadosForcaType } from "../../../@types/EstadoForca";
import SeletorEstado from "../../documentation-app/common/SeletorEstado";
import ToggleSwitch from "../ToggleSwitch";

export default function ToggleSwitchExemplos() {

    const [estado, setEstado] = useState<string>('');
    const [forcaEstado, setForcaEstado] = useState<EstadosForcaType>('padrao');
    const [desabilitado, setDesabilitado] = useState<boolean>(false);
    const [marcado, setMarcado] = useState<boolean>(false);

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

    return (
        <>
            <div className="row my-4">
                <SeletorEstado value={estado} onChange={e => setEstado(e.currentTarget.value)} />
            </div>
            <div className="row mb-4">
                <h5>Habilitar/Desabilitar</h5>
                <ToggleSwitch
                    checked={marcado}
                    onChange={() => { setMarcado(!marcado); console.log(marcado); }}
                    estado={forcaEstado}
                    disabled={desabilitado}
                    name="Teste"
                />
            </div>
        </>
    );
}
import { useState, useEffect } from "react";
import { EstadosForcaType } from "../../../@types/EstadoForca";
import SeletorEstado from "../../documentation-app/common/SeletorEstado";
import Checkbox from "../Checkbox";

export default function CheckboxExemplos() {

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

    return (
        <>
            <div className="row my-4">
                <SeletorEstado value={estado} onChange={e => setEstado(e.currentTarget.value)} />
            </div>
            <div className="row mb-4">
                <div className="row mb-4">
                    <h5>Checkbox</h5>
                    <div className="row">
                        <Checkbox estado={ forcaEstado } disabled={desabilitado}/>
                        <Checkbox estado={ forcaEstado } disabled={desabilitado}/>
                        <Checkbox estado={ forcaEstado } disabled={desabilitado}/>
                        <Checkbox estado={ forcaEstado } disabled={desabilitado}/>
                    </div>
                </div>
            </div>
        </>
    );
}
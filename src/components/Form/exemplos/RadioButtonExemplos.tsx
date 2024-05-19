import { useState, useEffect } from "react";
import { EstadosForcaType } from "../../../@types/EstadoForca";
import SeletorEstado from "../../documentation-app/common/SeletorEstado";
import RadioButton from "../RadioButton";

export default function RadioButtonExemplos() {

    const [estado, setEstado] = useState<string>('');
    const [forcaEstado, setForcaEstado] = useState<EstadosForcaType>('padrao');
    const [desabilitado, setDesabilitado] = useState<boolean>(false);
    const [marcado, setMarcado] = useState<string>('');

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
                    <RadioButton
                    value={0}
                        checked={marcado === '0'}
                        onChange={() => setMarcado('0')}
                        estado={forcaEstado}
                        disabled={desabilitado}
                        name="exemplo_radio"
                    />
                    <RadioButton
                    value={1}
                        checked={marcado === '1'}
                        onChange={() => setMarcado('1')}
                        estado={forcaEstado}
                        disabled={desabilitado}
                        name="exemplo_radio"
                    />
                </div>
            </div>
        </>
    );
}
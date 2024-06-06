import { Plus } from "lucide-react";
import Botao from "../../Botoes/Botao";
import Selecao from "../../Form/Selecao";
import { useState } from "react";
import Input from "../../Form/Input";

export default function AssociarUsuarios() {

    const [tipoUsuario, setTipoUsuario] = useState(1);

    const HandleTipoUsuario = (valor: any) => {
        setTipoUsuario(parseInt(valor.target.value));
    }

    return (
        <div className="associar-usuarios-input">
            <div className="card">
                <div className="row">
                    <p className="subtitulo">Adicionar uma pessoa ao time da empresa</p>
                </div>
                <div className="row">
                    <div className="col-3">
                        <Selecao
                            onChange={HandleTipoUsuario}
                            opcoes={[
                                { id: 1, name: "Faz parte do meu time" },
                                { id: 2, name: "Cliente" },
                            ]}
                        />
                    </div>
                    <div className="col-7">
                        {tipoUsuario === 1 ?
                            <Selecao
                                opcoes={[
                                    { id: 1, name: "Selecione o colaborador" }
                                ]}
                            /> :
                            <Input
                                type="text"
                                label="Digite o e-mail do cliente"
                            />}
                    </div>
                    <div className="col-2">
                        <Botao
                            className="btn-max"
                            estilo="Primary"
                            tamanho="Normal"
                            label="Adicionar"
                            icone={<Plus size={24} />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
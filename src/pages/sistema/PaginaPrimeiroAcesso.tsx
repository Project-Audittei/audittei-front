import { ArrowRight } from "lucide-react";
import Botao from "../../components/Botoes/Botao";
import VisaoBasica from "../../components/VisaoBasica";
import FormContainer from "../../components/Form/FormContainer";
import Input from "../../components/Form/Input";
import { useState } from "react";
import { consumirAPI } from "../../hooks/consumirAPI";
import { CNPJModel } from "../../models/CNPJModel";
import useUsuario from "../../hooks/useUsuario";

export default function PaginaPrimeiroAcesso() {    
    const [cnpj, setCnpj] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [empresa, setEmpresa] = useState<CNPJModel>({} as CNPJModel);
    const { usuario } = useUsuario();

    const HandleBuscarEmpresa = async (entrada: string) => {
        setCnpj(entrada);

        if(entrada.split('').length === 14) {
            const { data } = await consumirAPI<object, CNPJModel>({
                url: `/profile/cnpj/${entrada}`,
                method: 'get',
                authToken: usuario.access_token
            });

            if(data) {
                setEmpresa(data);
            }
        }
    }
    
    return (
        <VisaoBasica>
            <div id="modal" className="modal-form">
                <div className="backdrop"></div>
                <div className="modal">
                    <div className="modal-header">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/cadastro_empresa_header.svg`} alt="" />
                    </div>
                    <div className="modal-content">
                        <div className="modal-body">
                            <FormContainer>
                                <h3 className="text-center">🎉 Você acessou a plataforma! Sinta-se em casa! 🎉</h3>
                                <span className="descricao text-center m-medium">Antes de prosseguir, precisamos de algumas informações sobre o seu escritório.</span>
                                <div className="form-element-group">
                                    <div className="row">
                                        <div className="col-6">
                                            <Input
                                                type="text"
                                                placeholder="CNPJ"
                                                label="CNPJ"
                                                value={cnpj}
                                                onChange={e => HandleBuscarEmpresa(e.currentTarget.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Input
                                                type="text"
                                                label="Razão Social"
                                                placeholder="Razão Social"
                                                value={empresa.razaoSocial}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Input
                                                type="text"
                                                label="E-mail do Escritório"
                                                placeholder="E-mail do Escritório"
                                                value={email}
                                                onChange={e => setEmail(e.currentTarget.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <Input
                                                type="text"
                                                placeholder="Telefone do Escritório"
                                                label="Telefone do Escritório"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <Input
                                                type="text"
                                                placeholder="CEP"
                                                label="CEP"
                                                value={empresa.cep}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Input
                                                type="text"
                                                placeholder="Logradouro"
                                                label="Logradouro"
                                                value={empresa.logadouro}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <Input
                                                type="text"
                                                placeholder="Bairro"
                                                label="Bairro"
                                                value={empresa.bairro}
                                                disabled
                                            />
                                        </div>
                                        <div className="col-6">
                                            <Input
                                                type="text"
                                                placeholder="Cidade"
                                                label="Cidade"
                                                value={empresa.cidade}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-align-center mt-1">
                                    <Botao
                                        estilo="Primary"
                                        tamanho="Normal"
                                        label="Entrar"
                                        icone={<ArrowRight size={24} />}
                                        iconePosicao="direita"
                                    />
                                </div>
                            </FormContainer>
                        </div>
                    </div>
                </div>
            </div>
        </VisaoBasica>
    );
}
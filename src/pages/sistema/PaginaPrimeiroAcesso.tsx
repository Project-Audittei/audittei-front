import { ArrowRight } from "lucide-react";
import Botao from "../../components/Botoes/Botao";
import VisaoBasica from "../../components/VisaoBasica";
import FormContainer from "../../components/Form/FormContainer";
import Input from "../../components/Form/Input";

export default function PaginaPrimeiroAcesso() {
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
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Input
                                                type="text"
                                                label="Razão Social"
                                                placeholder="Razão Social"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Input
                                                type="text"
                                                label="E-mail do Escritório"
                                                placeholder="E-mail do Escritório"
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
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Input
                                                type="text"
                                                placeholder="Logradouro"
                                                label="Logradouro"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <Input
                                                type="text"
                                                placeholder="Bairro"
                                                label="Bairro"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <Input
                                                type="text"
                                                placeholder="Cidade"
                                                label="Cidade"
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
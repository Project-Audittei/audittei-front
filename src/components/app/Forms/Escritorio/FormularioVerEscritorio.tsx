import { CEPMascara } from "../../../../helpers/CEPHelper";
import { CNPJMascara } from "../../../../helpers/CNPJSanitize";
import { TelefoneMascara } from "../../../../helpers/TelefoneSanitize";
import { EscritorioModel } from "../../../../models/EscritorioModel";
import FormContainer from "../../../Form/FormContainer";

interface FormularioVerEscritorioProps {
    escritorio: EscritorioModel;
}

export default function FormularioVerEscritorio({ escritorio }: FormularioVerEscritorioProps) {

    return (
        <div className="row form-viewer">
            <div className="col">
                <div className="row mb-2 mt-4">
                    <div className="col">
                        <h5>Dados cadastrais</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <FormContainer>
                                <div className="form-field">
                                    <div className="label mb-1">CNPJ</div>
                                    <div className="valor">{ CNPJMascara(escritorio.cnpj) }</div>
                                </div>
                                <div className="form-field">
                                    <div className="label mb-1">Razão Social</div>
                                    <div className="valor">{ escritorio.razaoSocial }</div>
                                </div>
                                <div className="form-field">
                                    <div className="label mb-1">E-mail do Escritório</div>
                                    <div className="valor">{ escritorio.email }</div>
                                </div>
                                <div className="form-field">
                                    <div className="label mb-1">Telefone do Escritório</div>
                                    <div className="valor">{ TelefoneMascara(escritorio.telefone) }</div>
                                </div>
                            </FormContainer>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="row mb-2 mt-4">
                    <div className="col">
                        <h5>Dados de Localização</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <FormContainer>
                                <div className="form-field">
                                    <div className="label mb-1">CEP</div>
                                    <div className="valor">{ CEPMascara(escritorio.cep) }</div>
                                </div>
                                <div className="form-field">
                                    <div className="label mb-1">Logradouro</div>
                                    <div className="valor">{ escritorio.logradouro }</div>
                                </div>
                                <div className="form-field">
                                    <div className="label mb-1">Bairro</div>
                                    <div className="valor">{ escritorio.bairro }</div>
                                </div>
                                <div className="form-field">
                                    <div className="label mb-1">Cidade</div>
                                    <div className="valor">{ escritorio.cidade }</div>
                                </div>
                                <div className="form-field">
                                    <div className="label mb-1">Numero</div>
                                    <div className="valor">{ escritorio.numero }</div>
                                </div>
                                <div className="form-field">
                                    <div className="label mb-1">Complemento</div>
                                    <div className="valor">{ escritorio.complemento ?? '-' }</div>
                                </div>
                                <div className="form-field">
                                    <div className="label mb-1">UF</div>
                                    <div className="valor">{ escritorio.uf }</div>
                                </div>
                            </FormContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
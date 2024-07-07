import { CNPJMascara } from "../../../../helpers/CNPJSanitize";
import { EmpresaModel } from "../../../../models/EmpresaModel";
import FormContainer from "../../../Form/FormContainer";
import FormField from "../../../Form/FormField";

type FormularioVerEmpresaProps = {
    empresa: EmpresaModel;
    setEmpresa: React.Dispatch<React.SetStateAction<EmpresaModel | undefined>>;
}

export default function FormularioVerEmpresa({ empresa, setEmpresa }: FormularioVerEmpresaProps) {
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
                                <FormField 
                                    label={ "CNPJ" } 
                                    value={ CNPJMascara(empresa.cnpj) } 
                                    setValue={ e => setEmpresa({ ...empresa, cnpj: e.currentTarget.value }) } 
                                    tipo={ "number" }
                                />
                                <FormField 
                                    label={ "Razão Social" } 
                                    value={ empresa.razaoSocial } 
                                    setValue={ e => setEmpresa({ ...empresa, razaoSocial: e.currentTarget.value }) } 
                                    tipo={ "text" }
                                />
                                <FormField 
                                    label={ "Nome Fantasia" } 
                                    value={ empresa.nomeFantasia } 
                                    setValue={ e => setEmpresa({ ...empresa, nomeFantasia: e.currentTarget.value }) } 
                                    tipo={ "text" }
                                />
                                <FormField 
                                    label={ "Responsável Legal" } 
                                    value={ empresa.responsavelLegal } 
                                    setValue={ e => setEmpresa({ ...empresa, responsavelLegal: e.currentTarget.value }) } 
                                    tipo={ "text" }
                                />
                                <FormField 
                                    label={ "E-mail" } 
                                    value={ empresa.email } 
                                    setValue={ e => setEmpresa({ ...empresa, email: e.currentTarget.value }) } 
                                    tipo={ "email" }
                                />
                            </FormContainer>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="row mb-2 mt-4">
                    <div className="col">
                        <h5>Dados Tributários</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <FormContainer>
                                <FormField 
                                    label={ "Atividade" } 
                                    value={ CNPJMascara(empresa.cnpj) } 
                                    setValue={ e => setEmpresa({ ...empresa, cnpj: e.currentTarget.value }) } 
                                    tipo={ "number" }
                                />
                                <FormField 
                                    label={ "CNAE" } 
                                    value={ empresa.razaoSocial } 
                                    setValue={ e => setEmpresa({ ...empresa, razaoSocial: e.currentTarget.value }) } 
                                    tipo={ "text" }
                                />
                                <FormField 
                                    label={ "Regime Tributário" } 
                                    value={ empresa.nomeFantasia } 
                                    setValue={ e => setEmpresa({ ...empresa, nomeFantasia: e.currentTarget.value }) } 
                                    tipo={ "text" }
                                />
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
                                <FormField 
                                    label={ "CEP" } 
                                    value={ empresa.cep } 
                                    setValue={ e => setEmpresa({ ...empresa, cep: e.currentTarget.value }) } 
                                    tipo={ "number" }
                                />
                                <FormField 
                                    label={ "Logradouro" } 
                                    value={ empresa.logradouro } 
                                    setValue={ e => setEmpresa({ ...empresa, logradouro: e.currentTarget.value }) } 
                                    tipo={ "text" }
                                />
                                <FormField 
                                    label={ "Bairro" } 
                                    value={ empresa.bairro } 
                                    setValue={ e => setEmpresa({ ...empresa, bairro: e.currentTarget.value }) } 
                                    tipo={ "text" }
                                />
                                <FormField 
                                    label={ "Cidade" } 
                                    value={ empresa.cidade } 
                                    setValue={ e => setEmpresa({ ...empresa, cidade: e.currentTarget.value }) } 
                                    tipo={ "text" }
                                />
                                <FormField 
                                    label={ "Número" } 
                                    value={ empresa.numero } 
                                    setValue={ e => setEmpresa({ ...empresa, numero: e.currentTarget.value }) } 
                                    tipo={ "text" }
                                />
                                <FormField 
                                    label={ "Complemento" } 
                                    value={ empresa.complemento } 
                                    setValue={ e => setEmpresa({ ...empresa, complemento: e.currentTarget.value }) } 
                                    tipo={ "text" }
                                />
                                <FormField 
                                    label={ "UF" } 
                                    value={ empresa.uf } 
                                    setValue={ e => setEmpresa({ ...empresa, uf: e.currentTarget.value }) } 
                                    tipo={ "text" }
                                />
                            </FormContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
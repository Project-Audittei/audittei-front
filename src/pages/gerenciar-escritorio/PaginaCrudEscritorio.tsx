import { ArrowRight } from "lucide-react";
import Botao from "../../components/Botoes/Botao";
import VisaoBasica from "../../components/VisaoBasica";
import { useEffect, useState } from "react";
import Input from "../../components/Form/Input";
import FormContainer from "../../components/Form/FormContainer";
import Selecao from "../../components/Form/Selecao";
import { useParams } from "react-router-dom";
import { EscritorioModel } from "../../models/EscritorioModel";
import useUsuario from "../../hooks/useUsuario";
import { CNPJMascara, CNPJSanitize } from "../../helpers/CNPJSanitize";
import { TelefoneMascara, TelefoneSanitize } from "../../helpers/TelefoneSanitize";

interface PaginaCrudEmpresaProps {
    modo: "novo" | "edicao";
}

export default function PaginaCrudEscritorio({modo}: PaginaCrudEmpresaProps) {
    const [escritorio, setEscritorio] = useState<EscritorioModel | null>(null);

    const params = useParams();

    const { usuario } = useUsuario();

    useEffect(() => {
        if(usuario) {
            setEscritorio(usuario.escritorio);
        }

    }, [modo, params, usuario]);

    if(!escritorio) return (<VisaoBasica breadcrumbSecao="Editar Escritório:" menuAtivo="/gerenciar-escritorio/editar"></VisaoBasica>);
    return (
        <VisaoBasica breadcrumbSecao="Editar Escritório:" menuAtivo="/gerenciar-escritorio/editar">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <h3>{ "Editando Escritório" }</h3>
                    </div>
                </div>
            </div>
            <hr />
            <div className="card mt-3">
                <div className="card-body">
                    <div className="row row-align-center">
                        <div className="col-6">
                            <FormContainer>
                                <div className="form-element-group">
                                    <h5>Dados cadastrais</h5>
                                    <hr />
                                    <Input
                                        type="text"
                                        label="CNPJ"
                                        className="w-50"
                                        value={ CNPJMascara(escritorio.cnpj) }
                                        onChange={(e) => setEscritorio({...escritorio, cnpj: CNPJSanitize(e.target.value) })}
                                    />
                                    <Input
                                        type="text"
                                        label="Nome"
                                        value={escritorio.nome}
                                        onChange={(e) => setEscritorio({...escritorio, nome: e.target.value })}
                                    />
                                    <Input
                                        type="text"
                                        label="E-mail do Escritório"
                                        value={escritorio.email}
                                        onChange={(e) => setEscritorio({...escritorio, email: e.target.value })}
                                    />
                                    <Input
                                        type="text"
                                        label="Telefone do Escritório"
                                        value={ TelefoneMascara(escritorio.telefone) }
                                        onChange={(e) => setEscritorio({...escritorio, telefone: TelefoneSanitize(e.target.value) })}
                                    />
                                </div>
                                <div className="form-element-group">
                                    <h5>Dados de Localização</h5>
                                    <hr />
                                    <Input
                                        type="number"
                                        label="CEP"
                                        className="w-50"
                                        value={escritorio.cep}
                                        onChange={(e) => setEscritorio({...escritorio, cep: e.target.value })}
                                    />
                                    <Input
                                        type="text"
                                        label="Logradouro"
                                        value={escritorio.logradouro}
                                        onChange={(e) => setEscritorio({...escritorio, logradouro: e.target.value })}
                                    />
                                    <div className="row">
                                        <div className="col">
                                            <Input
                                                type="text"
                                                label="Bairro"
                                                value={escritorio.bairro}
                                                onChange={(e) => setEscritorio({...escritorio, bairro: e.target.value })}
                                            />
                                        </div>
                                        <div className="col">
                                            <Input
                                                type="text"
                                                label="Cidade"
                                                value={escritorio.cidade}
                                                onChange={(e) => setEscritorio({...escritorio, cidade: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <Input
                                        type="number"
                                        label="Número"
                                        className="w-50"
                                        value={escritorio.numero}
                                        onChange={(e) => setEscritorio({...escritorio, numero: e.target.value })}
                                    />
                                    <Input
                                        type="text"
                                        label="Complemento"
                                        value={escritorio.complemento}
                                        onChange={(e) => setEscritorio({...escritorio, complemento: e.target.value })}
                                    />
                                    <Selecao
                                        className="w-50"
                                        opcoes={[
                                            { id: 1, name: "UF" }
                                        ]}
                                    />
                                </div>
                                <div className="form-element-group">
                                    <Botao
                                        className="btn-max"
                                        estilo="Primary"
                                        tamanho="Normal"
                                        label={ "Salvar" }
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
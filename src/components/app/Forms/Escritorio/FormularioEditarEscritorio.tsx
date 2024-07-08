import { ArrowRight } from "lucide-react";
import { CNPJSanitize } from "../../../../helpers/CNPJSanitize";
import { TelefoneMascara, TelefoneSanitize } from "../../../../helpers/TelefoneSanitize";
import { ufs } from "../../../../helpers/UFLista";
import { EscritorioModel, EscritorioModelDTO } from "../../../../models/EscritorioModel";
import Botao from "../../../Botoes/Botao";
import FormContainer from "../../../Form/FormContainer";
import Input from "../../../Form/Input";
import InputCEP from "../../../Form/InputCEP";
import Selecao from "../../../Form/Selecao";
import InputCNPJ from "../../../Form/InputCNPJ";
import InputTelefone from "../../../Form/InputTelefone";
import { useEscritorio } from "../../../../services/EscritorioService";

interface FormularioEditarEscritorioProps {
    escritorio: EscritorioModel;
    setEscritorio: React.Dispatch<React.SetStateAction<EscritorioModel | null>>;
}

export default function FormularioEditarEscritorio({ escritorio, setEscritorio }: FormularioEditarEscritorioProps) {

    const { AtualizarEscritorio } = useEscritorio();

    const HandleEditarEscritorio = async (e: any) => {
        e.preventDefault();

        AtualizarEscritorio({
            bairro: escritorio.bairro,
            cep: escritorio.cep,
            cidade: escritorio.cidade,
            cnpj: escritorio.cnpj,
            email: escritorio.email,
            logradouro: escritorio.logradouro,
            numero: escritorio.numero,
            razaoSocial: escritorio.razaoSocial,
            telefone: escritorio.telefone,
            uf: escritorio.uf,
            complemento: escritorio.complemento
        }).catch(erro => console.log(erro));
    };

    return (
        <FormContainer>
            <div className="form-element-group">
                <h5>Dados cadastrais</h5>
                <hr />
                <InputCNPJ
                    value={ escritorio.cnpj }
                    setValue={ cnpj => setEscritorio({ ...escritorio, cnpj: CNPJSanitize(cnpj) }) }
                    disabled
                />
                <Input
                    type="text"
                    label="Razão Social"
                    value={escritorio.razaoSocial}
                    onChange={(e) => setEscritorio({ ...escritorio, razaoSocial: e.target.value })}
                    disabled
                />
                <Input
                    type="text"
                    label="E-mail do Escritório"
                    value={escritorio.email}
                    onChange={(e) => setEscritorio({ ...escritorio, email: e.target.value })}
                />
                <InputTelefone
                    value={TelefoneMascara(escritorio.telefone)}
                    setValue={telefone => setEscritorio({ ...escritorio, telefone: TelefoneSanitize(telefone) })}
                />
            </div>
            <div className="form-element-group">
                <h5>Dados de Localização</h5>
                <hr />
                <InputCEP
                    className="w-50"
                    value={escritorio.cep}
                    setValue={(telefone) => setEscritorio({ ...escritorio, cep: telefone })}
                    disabled
                />
                <Input
                    type="text"
                    label="Logradouro"
                    value={escritorio.logradouro}
                    onChange={(e) => setEscritorio({ ...escritorio, logradouro: e.target.value })}
                    disabled
                />
                <div className="row">
                    <div className="col">
                        <Input
                            type="text"
                            label="Bairro"
                            value={escritorio.bairro}
                            onChange={(e) => setEscritorio({ ...escritorio, bairro: e.target.value })}
                            disabled
                        />
                    </div>
                    <div className="col">
                        <Input
                            type="text"
                            label="Cidade"
                            value={escritorio.cidade}
                            onChange={(e) => setEscritorio({ ...escritorio, cidade: e.target.value })}
                            disabled
                        />
                    </div>
                </div>
                <Input
                    type="text"
                    label="Número"
                    className="w-50"
                    value={escritorio.numero}
                    onChange={(e) => setEscritorio({ ...escritorio, numero: e.target.value })}
                    disabled
                />
                <Input
                    type="text"
                    label="Complemento"
                    value={escritorio.complemento}
                    onChange={(e) => setEscritorio({ ...escritorio, complemento: e.target.value })}
                />
                <Selecao
                    className="w-50"
                    value={escritorio.uf}
                    opcoes={ufs}
                    disabled
                />
            </div>
            <div className="form-element-group">
                <Botao
                    className="btn-max"
                    estilo="Primary"
                    tamanho="Normal"
                    label={"Salvar"}
                    icone={<ArrowRight size={24} />}
                    iconePosicao="direita"
                    onClick={HandleEditarEscritorio}
                />
            </div>
        </FormContainer>
    );
}
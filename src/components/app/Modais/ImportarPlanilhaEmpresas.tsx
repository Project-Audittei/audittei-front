import { X } from "lucide-react";
import Botao from "../../Botoes/Botao";
import FileUpload from "../../Form/FileUpload";
import FormContainer from "../../Form/FormContainer";
import useModal from "../../../hooks/useModal";

export default function ImportarPlanilhaEmpresas() {

    const { modalClose } = useModal();

    const HandleFecharModal = () => {
        modalClose();
    }

    return (
        <div className="importar-planilha-empresas">
            <div className="modal-close">
                <Botao className="float-right" estilo="Secondary" tamanho="ExtraSmall" icone={<X />} somenteIcone onClick={HandleFecharModal} />
            </div>
            <div className="modal-header">
                <img src={`${process.env.PUBLIC_URL}/assets/images/gerenciar-empresas-nova-importar.svg`} alt="" />
            </div>
            <div className="modal-content">
                <FormContainer>
                    <h3 className="text-center">Adicione várias empresas de uma vez utilizando uma planilha.</h3>
                    <span className="descricao text-center m-medium">Para evitar problemas de compatibilidade, baixe o arquivo modelo da planilha clicando aqui, faça as adaptações necessárias e depois faça o upload clicando no botão abaixo.</span>
                    <div className="form-element-group">
                        <FileUpload
                            titulo="Adicione ou arraste o arquivo das empresas aqui."
                            extensoesPermitidas=".xls, .xlsx, .csv ou .txt"
                        />
                    </div>
                </FormContainer>
            </div>
        </div>
    );
}
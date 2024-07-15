import { X } from "lucide-react";
import Botao from "../../Botoes/Botao";
import FormContainer from "../../Form/FormContainer";
import useModal from "../../../hooks/useModal";
import Input from "../../Form/Input";
import { useState } from "react";
import Notificacao, { INotificacao } from "../../Notificacao/Notificacao";
import { ValidadorCampo } from "../../../helpers/ValidadorCampo";
import { APIConfig } from "../../../api/APIConfig";
import useUsuario from "../../../hooks/useUsuario";
import { consumirAPI } from "../../../hooks/consumirAPI";
import { InputError } from "../../../@types/InputErro";

interface ITrocarSenhaProps {
    novaSenha: string;
}

export default function TrocarSenha({ novaSenha }: ITrocarSenhaProps) {

    const [senha, setSenha] = useState<string>('');
    const [senhaErro, setSenhaErro] = useState<InputError | null>(null);

    const [feedback, setFeedback] = useState<INotificacao | null>(null);

    const [carregando, setCarregando] = useState(false);

    const { usuario } = useUsuario();

    const { modalClose } = useModal();

    const HandleTrocarSenha = async (e: any) => {
        e.preventDefault();
        setCarregando(true);

        if(!ValidadorCampo(senha, [{ regra: "not-empty" }, { regra: 'not-null' }], setSenhaErro)) return;

		const { success, message } = await consumirAPI({
			url: APIConfig.trocarSenhaUsuario,
			authToken: usuario!.access_token,
			method: "put",
			dataRequest: { senhaAtual: senha, novaSenha }
		});

		setFeedback({
            mensagem: message,
            tamanho: "pequeno",
            tipo: success ? 'valido' : 'erro'
        });

        setCarregando(false);
    }

    const HandleFecharModal = () => {
        modalClose();
    }

    return (
        
        <div className="troca-senha-modal p-4">
            <div className="modal-close">
                <Botao className="float-right" estilo="Secondary" tamanho="ExtraSmall" icone={<X />} somenteIcone onClick={HandleFecharModal} />
            </div>
            <div className="modal-content">
                <div className="modal-header">
                    <h6>Insira sua senha atual para salvar as alterações</h6>
                </div>
                <div className="modal-body">
                <FormContainer>
                    <div className="row mb-2">
                        <Input
                            type="password"
                            label="Confirme sua senha atual"
                            estado={ senhaErro?.estado ?? 'padrao' }
                            mensagensValidacao={{ erro: senhaErro?.mensagem }}
                            value={ senha }
                            onChange={ e => setSenha(e.currentTarget.value) }
                        />
                    </div>
                    <div className="row">
                        <Botao
                            estilo="Primary"
                            tamanho="Medium"
                            label="Confirmar senha atual"
                            onClick={HandleTrocarSenha}
                            disabled={ senha.split('').length < 4 }
                            isCarregando={ carregando }
                        />
                    </div>
                    <div className="row mt-2">
                        { feedback ? <Notificacao mensagem={ feedback?.mensagem } tamanho="pequeno" tipo={ feedback?.tipo } bloquearFechar /> : '' }
                    </div>
                </FormContainer>
                </div>
            </div>
        </div>
    );
}
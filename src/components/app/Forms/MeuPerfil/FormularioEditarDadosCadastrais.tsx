import { ArrowRight } from "lucide-react";
import { TelefoneMascara, TelefoneSanitize } from "../../../../helpers/TelefoneSanitize";
import { UsuarioModel } from "../../../../models/UsuarioModel";
import Botao from "../../../Botoes/Botao";
import Input from "../../../Form/Input";
import { useState } from "react";
import FormContainer from "../../../Form/FormContainer";
import InputTelefone from "../../../Form/InputTelefone";
import { consumirAPI } from "../../../../hooks/consumirAPI";
import { APIConfig } from "../../../../api/APIConfig";
import Notificacao, { INotificacao } from "../../../Notificacao/Notificacao";
import { useNavigate } from "react-router-dom";
import { ValidarCampos } from "../../../../helpers/ValidadorCampo";
import { InputError } from "../../../../@types/InputErro";
import useUsuario from "../../../../hooks/useUsuario";

type FormularioEditarDadosCadastraisProps = {
	usuario: UsuarioModel;
};

export default function FormularioEditarDadosCadastrais({
	usuario,
}: FormularioEditarDadosCadastraisProps) {

	const { AtualizarUsuario } = useUsuario();
	const [nome, setNome] = useState(usuario.nomeCompleto);
	const [nomeErro, setNomeErro] = useState<InputError | null>(null);
	
	const [telefone, setTelefone] = useState(usuario.telefone);
	const [telefoneErro, setTelefoneErro] = useState<InputError | null>(null);

	const [erro, setErro] = useState<INotificacao | null>(null);

	const [carregando, setCarregando] = useState(false);

	const navigate = useNavigate();

	const HandleEditarDadosUsuario = async (e: any) => {
		e.preventDefault();
		setCarregando(true);

		if(
			telefone === usuario.telefone && 
			nome === usuario.nomeCompleto
		) return navigate('/meu-perfil');

		if(!ValidarCampos([
			{
				campo: nome,
				regras: [ { regra: "not-null" }, { regra: "not-empty" } ],
				setError: setNomeErro
			},
			{
				campo: telefone,
				regras: [ { regra: "not-null" }, { regra: "not-empty" } ],
				setError: setTelefoneErro
			}
		])) return;

		const { success, message } = await consumirAPI({
			url: APIConfig.editarDadosUsuario,
			authToken: usuario.access_token,
			method: "put",
			dataRequest: { nomeCompleto: nome, telefone: TelefoneSanitize(telefone) }
		});

		if(!success) {
			setCarregando(false);
			return setErro({
				mensagem: message,
				tamanho: "pequeno",
				tipo: "erro"
			});
		}
		
		usuario.nomeCompleto = nome;
		usuario.telefone = telefone;

		AtualizarUsuario(usuario);

		return navigate('/meu-perfil');
	}

	return (
		<FormContainer>
            <div className="form-element-group">
                <h5>Dados cadastrais</h5>
                <hr />
				{ erro ? <Notificacao mensagem={erro.mensagem} tamanho={erro.tamanho} tipo={erro.tipo} bloquearFechar  /> : '' }
				<Input
					type="text"
					label="E-mail profissional"
					value={ usuario.email }
					disabled
				/>
                <Input
                    type="text"
                    label="Nome e sobrenome"
                    value={ nome }
					estado={ nomeErro?.estado ?? 'padrao' }
					mensagensValidacao={ {
						erro: nomeErro?.mensagem
					} }
                    onChange={(e) => setNome(e.currentTarget.value)}
                />
                <InputTelefone
                    value={ TelefoneMascara(telefone) }
                    setValue={telefone => setTelefone(telefone)}
					estado={ telefoneErro?.estado ?? 'padrao' }
					mensagensValidacao={ {
						erro: telefoneErro?.mensagem
					} }
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
                    onClick={HandleEditarDadosUsuario}
					isCarregando={ carregando }
                />
            </div>
        </FormContainer>
	);
}

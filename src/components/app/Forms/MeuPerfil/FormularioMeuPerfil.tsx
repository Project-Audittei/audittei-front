import { Pencil } from "lucide-react";
import { TelefoneMascara } from "../../../../helpers/TelefoneSanitize";
import { UsuarioModel } from "../../../../models/UsuarioModel";
import Botao from "../../../Botoes/Botao";
import Input from "../../../Form/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputError } from "../../../../@types/InputErro";
import useModal from "../../../../hooks/useModal";
import TrocarSenha from "../../Modais/TrocarSenha";

type FormularioMeuPerfilProps = {
	usuario: UsuarioModel;
};

export default function FormularioMeuPerfil({
	usuario,
}: FormularioMeuPerfilProps) {

	const { modalOpen } = useModal();

	const [novaSenha, setNovaSenha] = useState<string>('');
	const [confirmarNovaSenha, setConfirmarNovaSenha] = useState<string>('');
	const [confirmarNovaSenhaErro, setConfirmarNovaSenhaErro] = useState<InputError | null>(null);

	const VerificaSenha = (senhaInput: string) => {
        setConfirmarNovaSenha(senhaInput);
        if(confirmarNovaSenha.split('').length > 3) {
            if(senhaInput !== novaSenha) {
                setConfirmarNovaSenhaErro({
                    estado: "erro",
                    mensagem: 'As senhas devem coincidir'
                });

                return;
            } else setConfirmarNovaSenhaErro(null);
        }
    }

	const HandleTrocarSenha = () => {
		return modalOpen(<TrocarSenha novaSenha={ novaSenha } />, true);
	}

	const navigate = useNavigate();

	return (
		<div className="row form-viewer">
			<div className="col">
				<div className="row mb-1">
					<div className="row mt-4">
						<div className="col">
							<h5>Imagem de perfil</h5>
						</div>
						<div className="col col-align-center align-right">
							<Botao
								tamanho="ExtraSmall"
								estilo="Primary"
								icone={<Pencil size={16} />}
								label="Editar Imagem"
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="card">
						<div className="card-body">
							<div className="avatar">{usuario.iniciais}</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="row mb-2">
					<div className="col">
						<h5>Dados cadastrais</h5>
					</div>
					<div className="col col-align-center align-right">
						<Botao
							tamanho="ExtraSmall"
							estilo="Primary"
							icone={<Pencil size={16} />}
							label="Editar"
							onClick={ e => navigate('/meu-perfil/editar-dados-cadastro') }
						/>
					</div>
				</div>
				<div className="row">
					<div className="card">
						<div className="card-body">
							<div className="form-container">
								<div className="form-field mb-2">
									<div className="label mb-1">Nome e sobrenome</div>
									<div className="valor">{usuario.nomeCompleto}</div>
								</div>
								<div className="form-field mb-2">
									<div className="label mb-1">E-mail Profissional</div>
									<div className="valor">{usuario.email}</div>
								</div>
								<div className="form-field">
									<div className="label mb-1">DDD + Telefone</div>
									<div className="valor">{TelefoneMascara(usuario.telefone)}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="row mb-2">
					<div className="col">
						<h5>Senha de acesso</h5>
					</div>
				</div>
				<div className="row">
					<div className="card">
						<div className="card-body">
							<div className="form-container w-100">
								<div className="form-field">
									<div className="label">Cadastrar nova senha</div>
								</div>
								<div className="row">
									<div className="col">
										<Input
											className="mb-2"
											type="password"
											label="Insira a sua nova senha de acesso"
											value={novaSenha}
											onChange={e => setNovaSenha(e.currentTarget.value)}
										/>
										<Input
											type="password"
											label="Repita a sua nova senha de acesso"
											value={confirmarNovaSenha}
											estado={ confirmarNovaSenhaErro?.estado }
											mensagensValidacao={{ erro: confirmarNovaSenhaErro?.mensagem }}
											onChange={e => VerificaSenha(e.currentTarget.value)}
										/>
									</div>
									<div className="col"></div>
								</div>
								<Botao
									estilo="Primary"
									tamanho="Medium"
									label="Salvar nova senha"
									onClick={HandleTrocarSenha}
									disabled={ novaSenha !== confirmarNovaSenha }
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

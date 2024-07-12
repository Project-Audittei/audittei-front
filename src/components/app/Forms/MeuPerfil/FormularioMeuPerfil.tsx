import { Pencil } from "lucide-react";
import { CNPJMascara } from "../../../../helpers/CNPJSanitize";
import { TelefoneMascara } from "../../../../helpers/TelefoneSanitize";
import { UsuarioModel } from "../../../../models/UsuarioModel";
import Botao from "../../../Botoes/Botao";
import FormContainer from "../../../Form/FormContainer";
import FormField from "../../../Form/FormField";
import Input from "../../../Form/Input";
import { useState } from "react";

type FormularioMeuPerfilProps = {
	usuario: UsuarioModel;
};

export default function FormularioMeuPerfil({
	usuario,
}: FormularioMeuPerfilProps) {

    const [novaSenha, setNovaSenha] = useState<string>('');
    const [confirmarNovaSenha, setConfirmarNovaSenha] = useState<string>('');

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
				</div>
				<div className="row">
					<div className="card">
						<div className="card-body">
							<div className="form-container">
								<div className="form-field mb-2">
									<div className="label mb-1">Nome e sobrenome</div>
									<div className="valor">{ usuario.nomeCompleto }</div>
								</div>
								<div className="form-field mb-2">
									<div className="label mb-1">E-mail Profissional</div>
									<div className="valor">{ usuario.email }</div>
								</div>
								<div className="form-field">
									<div className="label mb-1">DDD + Telefone</div>
									<div className="valor">{ TelefoneMascara(usuario.telefone) }</div>
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
								<Input
                                    type="password"
                                    label="Insira a sua nova senha de acesso"
                                    value={ novaSenha }
                                    onChange={ e => setNovaSenha( e.currentTarget.value )}
                                />
								<Input
                                    type="password"
                                    label="Repita a sua nova senha de acesso"
                                    value={ confirmarNovaSenha }
                                    onChange={ e => setConfirmarNovaSenha( e.currentTarget.value )}
                                />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

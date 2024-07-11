import { Pencil } from "lucide-react";
import Botao from "../../components/Botoes/Botao";
import VisaoBasica from "../../components/VisaoBasica";
import useUsuario from "../../hooks/useUsuario";
import FormViewer, { IForm } from "../../components/Form/FormViewer";
import { TelefoneMascara } from "../../helpers/TelefoneSanitize";

export default function PaginaMeuPerfil() {

	const { usuario } = useUsuario();

	if(!usuario) return <></>;

	const form: IForm = {
        secoes: [
            {
                title: "Dados cadastrais",
                campos: [
                    {
                        label: "Nome e Sobrenome",
                        value: usuario.nomeCompleto,
                        tipo: "text",
                        setValue: e => {}
                    },
                    {
                        label: "E-mail profissional",
                        value: usuario.email,
                        tipo: "email",
                        setValue: e => {}
                    },
                    {
                        label: "DDD + Telefone",
                        value: TelefoneMascara(usuario.telefone),
                        tipo: "text",
                        setValue: e => {}
                    },
                ]
            }
        ]
    };

	return (
		<VisaoBasica breadcrumbSecao="Meu Perfil">
			<div className="row">
				<div className="col">
					<div className="row">
						<h3>Meu Perfil</h3>
					</div>
				</div>
				<div className="col col-align-center align-right"></div>
			</div>

			<div className="row">
				<div className="col">
					<div className="row mb-2">
						<div className="col">
							<div className="row">
								<h4>Imagem de perfil</h4>
							</div>
						</div>
						<div className="col col-align-center align-right">
							<Botao
								estilo="Primary"
								tamanho="ExtraSmall"
								label="Editar"
								icone={<Pencil size={16} />}
							/>
						</div>
					</div>
					<div className="row">
						<div className="card">
							<div className="avatar">{ usuario.iniciais }</div>
						</div>
					</div>
				</div>
			</div>
			{ form ? form.secoes.map( secao => (
                <FormViewer secao={secao} />
            ) ) : '' }
		</VisaoBasica>
	);
}

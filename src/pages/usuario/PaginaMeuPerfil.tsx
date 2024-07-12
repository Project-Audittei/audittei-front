import { Pencil } from "lucide-react";
import Botao from "../../components/Botoes/Botao";
import VisaoBasica from "../../components/VisaoBasica";
import useUsuario from "../../hooks/useUsuario";
import FormViewer, { IForm } from "../../components/Form/FormViewer";
import { TelefoneMascara } from "../../helpers/TelefoneSanitize";
import FormularioMeuPerfil from "../../components/app/Forms/MeuPerfil/FormularioMeuPerfil";

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

			<FormularioMeuPerfil usuario={usuario} />

		</VisaoBasica>
	);
}
